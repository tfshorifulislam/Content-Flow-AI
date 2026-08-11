'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface UserInfo {
    name: string;
    email: string;
    password: string;
}

export interface LoginInputs {
    email: string;
    password: string;
}


//user sigup system
export const registerUser = async (userInfo: UserInfo) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
            cache: 'no-store',
        });

        const result = await res.json();

        if (result.success && result.token) {
            const cookieStore = await cookies();
            cookieStore.set('token', result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/'
            });
        }

        return result;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
        return {
            success: false,
            message: 'Failed to create user',
            error: errorMessage,
        };
    }
}



// user logout system
export const logoutUser = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('token');
    redirect('/');
};



// user login system;
export const loginUser = async (credentials: LoginInputs) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            cache: 'no-store',
        });

        const result = await res.json();

        if (result.success && result.token) {
            const cookieStore = await cookies();
            cookieStore.set('token', result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/'
            });
        }

        return result;
    } catch (error) {
        console.error("Login Action Error:", error);
        return {
            success: false,
            message: 'Failed to login',
            error: error instanceof Error ? error.message : 'Something went wrong',
        };
    }
};
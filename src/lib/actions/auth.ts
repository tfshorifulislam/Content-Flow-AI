'use server';

import { decodeJwt, jwtVerify } from "jose";
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



//get  current user
export async function getCurrentUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) return null;

        const payload = decodeJwt(token) as {
            id?: string;
            userId?: string;
            email?: string;
            name?: string;
            userImage?: string;
        };

        const userId = payload.id || payload.userId;

        if (!payload || !userId) return null;

        return {
            id: userId,
            email: payload.email || "",
            name: payload.name || "",
            userImage: payload.userImage || null,
        };
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
}
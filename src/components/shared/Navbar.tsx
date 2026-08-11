import Link from "next/link";
import { Button } from "../ui/button";
import { DropdownMenuAvatar } from "./DropDownMenuAvatar";
import { SearchInput } from "./SearchInput";
import { getCurrentUser } from "@/lib/actions/auth";

interface NavbarProps {
    user?: {
        id: string;
        email: string;
        name?: string;
    } | null;
}


const Navbar = async () => {
 
    const user = await getCurrentUser()
    console.log(user)
    return (
        <div className="bg-[#F7FAF8] py-3 px-8 flex justify-between items-center border-b border-r border-[#BEC9C5]">
            <div>
                <SearchInput />
            </div>
            <div>
                {
                    user ? <DropdownMenuAvatar />
                        :
                        <div className="flex items-center gap-3">
                            <Link href={'/auth/login'}>
                                <Button variant='outline'>
                                    Login
                                </Button>
                            </Link>
                            <Link href={'/auth/signup'}>
                                <Button className='rounded-2xl bg-[#00695C] hover:bg-[#00695de8]'>
                                    Sign Up
                                </Button>
                            </Link>

                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
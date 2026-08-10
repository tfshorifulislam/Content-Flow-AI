'use client';

import { CircleQuestionMark, CreditCard, LayoutDashboard, Settings } from "lucide-react";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathName = usePathname()

    const menuItems = [
        { name: 'Dashboard', href: '/', icon: <LayoutDashboard /> },
        { name: 'Billing', href: '/billing', icon: <CreditCard /> },
        { name: 'Settings', href: '/setting', icon: <Settings /> },
    ];

    return (
        <div className="bg-[#F7FAF8] border border-[#BEC9C5] py-3 px-4 min-h-screen max-w-64 sticky top-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="text-[#94E5D5] font-bold text-lg leading-6 text-center bg-[#00695C] rounded-md flex justify-center items-center w-10 h-10">
                        C
                    </div>
                    <div>
                        <h1 className="text-[#004F45] font-bold leading-6 text-lg ">
                            ContentFlow AI
                        </h1>
                        <p className="font-medium text-sm leadin-3 text-[#6E7976] ">
                            Pro Workspace
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    {
                        menuItems.map((items, index) =>
                            <Link
                                key={index}
                                href={items.href}
                                className={`py-2.5 px-4 rounded-md text-sm font-semibold leading-4 ${pathName === items.href ? 'bg-[#E5E9E6] text-[#004F45]' : 'text-[#3E4946] '}`}
                            >
                                <span className="flex items-center gap-3">
                                    {items.icon}
                                    {items.name}
                                </span>
                            </Link>

                        )
                    }
                </div>
            </div>

            <div className="cursor-pointer">
                <div className="bg-[#E5E9E6] border-[#BEC9C5] rounded-md py-2 mb-4">
                    <p className="font-semibold text-sm leading-4 text-center text-[#004F45]">
                        Upgrade Plan
                    </p>
                </div>
                <div className="flex items-center justify-center mb-3 gap-3 text-[#3E4946]">
                    <CircleQuestionMark />
                    <p className="font-semibold text-sm leading-4 ">
                        Help Center
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
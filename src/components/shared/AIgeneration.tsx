"use client";

import { useState } from "react";
import { Sparkles, FileText, Hash, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const AIgeneration = () => {
    const [platform, setPlatform] = useState("blog");

    const platforms = [
        { id: "blog", label: "Blog Post", icon: FileText },
        { id: "twitter", label: "Twitter Thread", icon: Hash },
        { id: "linkedin", label: "LinkedIn Post", icon: Briefcase },
    ];

    return (
        <div className="bg-white border border-[#E0E3E1] shadow-sm p-6 rounded-2xl">
            {/* Header */}
            <div className="font-semibold text-xl text-[#181C1B] flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#00695C]" />
                <h2>New AI Generation</h2>
            </div>

            <div className="space-y-6 w-full">
                {/* Topic Input */}
                <div className="space-y-2">
                    <label className="font-semibold text-sm text-[#181C1B]">
                        Topic or Keyword
                    </label>
                    <Input
                        type="text"
                        placeholder="e.g., The future of remote work in 2026..."
                        className="bg-[#F7FAF8] border-[#E0E3E1] h-12 text-sm focus-visible:ring-[#00695C]"
                    />
                </div>

                {/* Tone and Length Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* Tone Selection */}
                    <div className="flex flex-col gap-2 w-full ">
                        <label className="font-semibold text-sm text-[#181C1B]">
                            Tone of Voice
                        </label>
                        <Select defaultValue="professional">
                            <SelectTrigger className="bg-[#F7FAF8] border-[#E0E3E1] h-12! w-full focus:ring-[#00695C]">
                                <SelectValue placeholder="Select tone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="professional">Professional</SelectItem>
                                <SelectItem value="casual">Casual</SelectItem>
                                <SelectItem value="friendly">Friendly</SelectItem>
                                <SelectItem value="witty">Witty</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Length Selection */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold text-sm text-[#181C1B]">
                            Length
                        </label>
                        <Select defaultValue="short">
                            <SelectTrigger className="bg-[#F7FAF8] border-[#E0E3E1] h-12! w-full focus:ring-[#00695C]">
                                <SelectValue placeholder="Select length" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="short">Short Form (Social)</SelectItem>
                                <SelectItem value="medium">Medium Form</SelectItem>
                                <SelectItem value="long">Long Form (Article)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Target Platform Cards */}
                <div className="">
                    <label className="font-semibold text-sm text-[#181C1B]">
                        Target Platform
                    </label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                        {platforms.map((p) => {
                            const Icon = p.icon;
                            const isSelected = platform === p.id;
                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => setPlatform(p.id)}
                                    className={`flex flex-col items-center justify-center p-4 rounded-md border  ${isSelected
                                        ? "border-[#00695C] bg-[#F7FAF8] text-[#00695C] border-2"
                                        : "border-[#E0E3E1] bg-[#F7FAF8]/50 text-[#6E7976] hover:bg-[#F7FAF8]"
                                        }`}
                                >
                                    <Icon className="w-6 h-6 mb-2" />
                                    <span className="text-xs font-semibold">{p.label}</span>
                                </button>
                            );
                        })}
                    </div>

                </div>

                {/* Action Button */}
                <div className="pt-2">
                    <Button className="w-full cursor-pointer bg-[#00695C] hover:bg-[#00695de8] text-white h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Generate Content with AI
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AIgeneration;
"use client";

import Link from "next/link";
import { ArrowLeft, Home, FileSearch, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-[#F7FAF8] flex items-center justify-center p-6 z-50">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative max-w-2xl w-full bg-white/50 backdrop-blur-sm border border-[#BEC9C5]/50 p-12 rounded-3xl shadow-2xl shadow-[#004F45]/5 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: 3D Visual/Icon with Animation */}
        <div className="relative flex-shrink-0 group">
          {/* Animated Glow behind icon */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#94E5D5] to-[#00695C] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative w-40 h-40 bg-[#E5E9E6] border-2 border-white rounded-full flex items-center justify-center text-[#00695C] shadow-inner overflow-hidden">
            {/* Pulsing AI Scanning Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#94E5D5] shadow-[#94E5D5]/50 shadow-lg animate-scan"></div>
            
            <FileSearch size={72} strokeWidth={1.5} className="relative z-10" />
            
            {/* Sparkle Icons */}
            <Sparkles size={20} className="absolute top-8 right-8 text-[#94E5D5] opacity-60" />
          </div>
          
          {/* Large Background 404 Text */}
          <span className="absolute -bottom-6 -left-4 font-extrabold text-9xl text-[#004F45]/5 select-none tracking-tighter">
            404
          </span>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#E5E9E6] text-[#004F45] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border border-[#BEC9C5]/50">
              <Sparkles size={14} className="text-[#00695C]" />
              CONTENTFLOW AI - PATHFINDER
            </div>
            <h1 className="text-5xl font-extrabold text-[#004F45] tracking-tighter leading-tight">
              Lost in <span className="text-[#00695C]">Cyberspace</span>?
            </h1>
            <p className="text-[#6E7976] text-base font-medium leading-relaxed max-w-md mx-auto md:mx-0">
              Our advanced AI couldn't locate the document you requested. The path might be broken or moved to a restricted sector. Let's guide you back.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              href="/"
              className="flex items-center justify-center gap-2.5 bg-[#00695C] hover:bg-[#004F45] text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-[#00695C]/20 hover:shadow-[#004F45]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home size={20} />
              <span>Return to Mission Control</span>
            </Link>

            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 bg-white hover:bg-[#E5E9E6]/50 text-[#004F45] border border-[#BEC9C5] px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:border-[#00695C]/50 hover:shadow-md active:scale-[0.98]"
            >
              <ArrowLeft size={18} />
              <span>Initiate Recall (Go Back)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
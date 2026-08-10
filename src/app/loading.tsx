import { Sparkles, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen w-full fixed top-0 left-0 bg-[#F7FAF8] flex flex-col items-center justify-center p-4 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Icon Container */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Ring */}
          <div className="w-16 h-16 rounded-full border-4 border-[#E0E3E1] border-t-[#00695C] animate-spin" />
          
          {/* Center Brand Icon */}
          <div className="absolute flex items-center justify-center text-[#00695C]">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Text Details */}
        <div className="text-center space-y-1">
          <h3 className="text-[#004F45] font-semibold text-lg tracking-wide flex items-center justify-center gap-2">
            Loading ContentFlow AI
          </h3>
          <p className="text-[#6E7976] text-xs font-medium animate-pulse">
            Please wait a moment...
          </p>
        </div>
      </div>
    </div>
  );
}
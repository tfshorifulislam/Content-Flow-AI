import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AICreditsCardProps {
  usedCredits?: number;
  totalCredits?: number;
}

export default function AICreditsCard({
  usedCredits = 750,
  totalCredits = 1000,
}: AICreditsCardProps) {
  // Percentage calculation for progress bar width
  const percentage = Math.min(
    Math.round((usedCredits / totalCredits) * 100),
    100
  );

  return (
    <div className="bg-white border border-[#E0E3E1] rounded-2xl p-6 w-full max-w-sm shadow-sm space-y-6">
      {/* Title & Info Icon */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#181C1B]">AI Credits</h3>
        <button 
          type="button" 
          className="text-[#B2B8B5] hover:text-[#6E7976] transition-colors"
          title="Credit details"
        >
          <Info className="w-6 h-6 stroke-[1.75]" />
        </button>
      </div>

      {/* Credit Numbers & Progress Bar */}
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-4xl font-bold text-[#004F45]">
            {usedCredits}
          </span>
          <span className="text-sm font-semibold text-[#6E7976]">
            / {totalCredits} used
          </span>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full bg-[#E8ECE9] h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#004F45] to-[#003840] h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant="outline"
        className="w-full h-11 border-[#BEC9C5] text-[#3E4946] hover:bg-[#F7FAF8] hover:text-[#004F45] font-semibold text-sm rounded-xl transition-colors"
      >
        Upgrade Plan
      </Button>
    </div>
  );
}
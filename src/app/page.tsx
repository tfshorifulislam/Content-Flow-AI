import AICreditsCard from "@/components/shared/AiCreadits";
import AIgeneration from "@/components/shared/AIgeneration";
import { Flame, PartyPopper } from "lucide-react";

const Homepage = () => {
  return (
    <div className="py-6 md:py-2 max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="font-bold text-3xl md:text-4xl text-[#181C1B] tracking-tight mb-2">
          Welcome back, Creator
        </h1>
        <p className="text-base md:text-lg text-[#3E4946] font-medium">
          Let's generate some engaging content today.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-start">
        
        {/* Left Column: Main Form */}
        <div className="lg:col-span-4 h-full">
          <AIgeneration />
        </div>

        {/* Right Column: Cards & Analytics */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* AI Credits Card */}
          <div className="w-full">
            <AICreditsCard />
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            
            {/* Streak Card */}
            <div className="bg-white border border-[#E0E3E1] rounded-2xl p-5 flex flex-col items-center justify-center shadow-xs hover:border-[#703321]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#FFF2EE] flex items-center justify-center text-[#703321] mb-3">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <h2 className="text-[#181C1B] font-bold text-2xl leading-none mb-1">
                12
              </h2>
              <p className="font-semibold text-xs text-[#6E7976] tracking-wide uppercase">
                Day Streak
              </p>
            </div>

            {/* Published Card */}
            <div className="bg-white border border-[#E0E3E1] rounded-2xl p-5 flex flex-col items-center justify-center shadow-xs hover:border-[#005DB7]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#005DB7] mb-3">
                <PartyPopper className="w-5 h-5" />
              </div>
              <h2 className="text-[#181C1B] font-bold text-2xl leading-none mb-1">
                45
              </h2>
              <p className="font-semibold text-xs text-[#6E7976] tracking-wide uppercase">
                Published
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-8 md:mt-12 animate-bounce">
      <ChevronDown className="text-[#930000] w-6 h-4 sm:w-8 sm:h-6" />
      <ChevronDown className="text-[#D99413] w-6 h-4 sm:w-8 sm:h-6 -mt-4" />
      <ChevronDown className="text-[#D99413] w-6 h-4 sm:w-8 sm:h-6 -mt-4" />
      <ChevronDown className="text-[#D99413] w-6 h-4 sm:w-8 sm:h-6 -mt-4" />
    </div>
  );
};

export default ScrollIndicator;

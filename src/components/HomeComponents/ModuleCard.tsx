import type React from "react";

interface ModuleCardProps {
  name: string;
  description: string;
  mascotImage: string;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ name, description, mascotImage, index }) => {
  return (
    <div
      className="group relative h-auto min-h-[450px] rounded-3xl overflow-hidden border-3 border-[#930000] bg-[#FEFEEA] shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Background Mascot Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 group-hover:opacity-35 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${mascotImage})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#930000]/5 via-transparent to-[#930000]/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
        {/* Header - Fixed Position */}
        <div className="flex-shrink-0 mb-4">
          <div className="inline-block px-4 py-2 bg-[#930000] text-[#FEFEEA] rounded-full text-sm font-semibold mb-4 shadow-md">
            Module {index + 1}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#930000] leading-tight group-hover:text-[#7E0000] transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Description - Full Content */}
        <div className="flex-1 mb-6">
          <p className="text-[#131313] text-sm sm:text-base leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>

        {/* Bottom Accent - Fixed Position */}
        <div className="flex-shrink-0">
          <div className="w-full h-1 bg-gradient-to-r from-[#930000] via-[#D99413] to-[#930000] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-[#D99413] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ModuleCard;
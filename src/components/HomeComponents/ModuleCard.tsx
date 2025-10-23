import { UsersRound, Tag } from "lucide-react";
import type React from "react";

interface ModuleCardProps {
  name: string;
  description: string;
  mascotImage: string;
  index: number;
  members?: string;
  fee?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ name, description, mascotImage, index, members, fee }) => {
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

        {/* Members and Fee Info */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-700 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <UsersRound className="w-6 h-6 text-[#930000]" />
            <span>{members} Members</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-6 h-6 text-[#930000]" />
            <span>{fee === 0 ? "Free for FASTians" : `Rs. ${fee}`}</span>
          </div>
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
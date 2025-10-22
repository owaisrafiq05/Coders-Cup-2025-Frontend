import type React from "react";
import ModuleCard from "./ModuleCard";

interface ModuleData {
  name: string;
  description: string;
  mascotImage: string;
}

const modulesData: ModuleData[] = [
   {
    name: "Coder's Cup: Competitive Programming",
    description:
      "An annual programming contest where top teams from each batch compete through multiple rounds, tackling up to five problems from basics to dynamic programming. Finalists form houses that battle for the title. Team size: 1–3.",
 mascotImage: "po.jpg"  
  },
  {
    name: "Hackathon",
    description:
      "An intense coding marathon where participants design, develop, and deploy innovative solutions within a limited time. Open to all skill levels, the competition tests creativity, problem-solving, and teamwork through real-world challenges that demand both technical expertise and collaboration.",
    mascotImage: "shifu.png"  
  },
  {
    name: "Code-Fu: The Debugging Trials",
    description:
      "A multi-stage debugging challenge where participants identify, analyze, and fix coding bugs across diverse scenarios. Each round tests accuracy, speed, and logical reasoning under pressure, leading participants to uncover a hidden message by the end of the journey.",
    mascotImage: "furious-five.jpg"
  },
  {
    name: "Data Dash",
    description:
      "A beginner-friendly data visualization challenge where teams of 2–3 students analyze real-world datasets to uncover meaningful insights. Open to participants from all disciplines, the competition blends analytical and creative visualization techniques to answer both numerical and qualitative questions.",
    mascotImage: "ping.png"
    },
  {
    name: "Chi Paradox - By PROCOM",
    description:
      "A logic and puzzle-solving challenge inspired by the balance and wisdom of Kung Fu Panda’s universe. Participants progress through seven stages filled with riddles, sequences, and reasoning-based tasks that test intellect, patience, and critical thinking.",
    mascotImage: "kai.png"
    },
  {
    name: "Pitch Warriors",
   description:
      "A one-day marketing competition testing creativity, persuasion, and adaptability. Teams of 2–4 compete in two rounds — ‘Pitch Perfect’, featuring spontaneous elevator pitches, and ‘Brand Battle’, where finalists develop and defend brand strategies while reacting to surprise market crises. ",
   mascotImage: "chama.png"
  }
];

const ModulesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FEFEEA] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="modules-circle-bg.png"
          alt="timeline section decorative background"
          className="w-full max-w-7xl opacity-90 object-contain z-0"
        />
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#930000] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#D99413] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#930000] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#930000] leading-tight mb-6">
            Modules
          </h2>
        </div>
        
        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {modulesData.map((module, index) => (
            <div
              key={module.name}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <ModuleCard
                name={module.name}
                description={module.description}
                mascotImage={module.mascotImage}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
        `
      }} />
    </section>
  );
};

export default ModulesSection;
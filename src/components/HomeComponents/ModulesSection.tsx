import type React from "react";
import { useState } from "react";
import RegistrationModal from "../GlobalComponents/RegistrationModal";
import ModuleCard from "./ModuleCard";
import { motion } from "framer-motion";
import { COMPETITIVE_PROGRAMMING_FORM, OTHER_MODULES_FORM } from "../../constants/formLinks.constants";

interface ModuleData {
  name: string;
  description: string;
  mascotImage: string;
  members?: string;
  fee?: number;
  registrationLink?: string;
  rulebookLink?: string;
  isRegistrationClosed?: boolean;
}

const modulesData: ModuleData[] = [
  {
    name: "Coder's Cup: Competitive Programming",
    description:
      "An annual programming contest where top teams from each batch compete through multiple rounds, tackling up to five problems from basics to dynamic programming. Finalists form houses that battle for the title. Team size: 1–3.",
    mascotImage: "po.jpg",
    members: "2 to 3",
    fee: 500,
    registrationLink: COMPETITIVE_PROGRAMMING_FORM,
    rulebookLink: "/ruleBook/Competitive Programming.pdf",
    isRegistrationClosed: true
  },
  {
    name: "Hackathon",
    description:
      "An intense coding marathon where participants design, develop, and deploy innovative solutions within a limited time. Open to all skill levels, the competition tests creativity, problem-solving, and teamwork through real-world challenges that demand both technical expertise and collaboration.",
    mascotImage: "shifu.png",
    members: "2 to 3",
    fee: 800,
    registrationLink: OTHER_MODULES_FORM,
    rulebookLink: "/ruleBook/Hackathon Rule Book.pdf",
    isRegistrationClosed: true
  },
  {
    name: "Code-Fu: The Debugging Trials",
    description:
      "A multi-stage debugging challenge where participants identify, analyze, and fix coding bugs across diverse scenarios. Each round tests accuracy, speed, and logical reasoning under pressure, leading participants to uncover a hidden message by the end of the journey.",
    mascotImage: "furious-five.png",
    members: "2 to 3",
    fee: 800,
    registrationLink: OTHER_MODULES_FORM,
    rulebookLink: "/ruleBook/Code Fu Debugging trials.pdf",
    isRegistrationClosed: true
  },
  {
    name: "Data Dash",
    description:
      "A beginner-friendly data visualization challenge where teams of 2–3 students analyze real-world datasets to uncover meaningful insights. Open to participants from all disciplines, the competition blends analytical and creative visualization techniques to answer both numerical and qualitative questions.",
    mascotImage: "ping.png",
    members: "2 to 3",
    fee: 800,
    registrationLink: OTHER_MODULES_FORM,
    rulebookLink: "/ruleBook/Data Dash.pdf",
    isRegistrationClosed: true
  },
  {
    name: "Chi Paradox - By PROCOM",
    description:
      "A logic and puzzle-solving challenge inspired by the balance and wisdom of Kung Fu Panda's universe. Participants progress through seven stages filled with riddles, sequences, and reasoning-based tasks that test intellect, patience, and critical thinking.",
    mascotImage: "kai.png",
    members: "2 to 3",
    fee: 800,
    registrationLink: OTHER_MODULES_FORM,
    rulebookLink: "/ruleBook/Chi Paradox By PROCOM.pdf",
    isRegistrationClosed: true
  },
  {
    name: "Pitch Warriors",
    description:
      "A one-day marketing competition testing creativity, persuasion, and adaptability. Teams of 2–4 compete in two rounds — ‘Pitch Perfect’, featuring spontaneous elevator pitches, and ‘Brand Battle’, where finalists develop and defend brand strategies while reacting to surprise market crises. ",
    mascotImage: "chama.png",
    members: "2 to 3",
    fee: 800,
    registrationLink: OTHER_MODULES_FORM,
    rulebookLink: "/ruleBook/Pitch Warriors.pdf"
  }
];

const ModulesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="modules" className="w-full bg-[#FEFEEA] relative overflow-hidden">
      <div className="absolute hidden sm:flex items-center justify-center opacity-30 w-screen h-full overflow-hidden">
        <div
          className="absolute rounded-full border border-[#EA4A4A] w-[1450px] h-[1450px]"
        ></div>
        <div
          className="absolute rounded-full border border-[#EA4A4A] w-[1150px] h-[1150px]"
        ></div>
        <div
          className="absolute rounded-full border border-[#EA4A4A] opacity-60 w-[850px] h-[850px]"
        ></div>

        <div
          className="absolute rounded-full border border-[#EA4A4A] opacity-60 w-[550px] h-[550px]"
        ></div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#930000] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#D99413] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#930000] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl  py-16 sm:py-20 lg:py-24   mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-[#930000] uppercase leading-[1] text-center">
            Modules
          </h2>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {modulesData.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ModuleCard
                name={module.name}
                description={module.description}
                mascotImage={module.mascotImage}
                members={module.members}
                fee={module.fee}
                index={index}
                registrationLink={module.registrationLink}
                rulebookLink={module.rulebookLink}
                isRegistrationClosed={module.isRegistrationClosed}
              />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
           className="mx-auto block items-center justify-center rounded-full bg-[#930000] text-[#FEFEEA]
                           font-semibold cursor-pointer sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-2xl transition-shadow duration-200"
 >
            Register Now
          </button>
        </motion.div>

      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ModulesSection;
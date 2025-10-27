import { motion } from "framer-motion";
import ModuleCard from "./ModuleCard";
import { COMPETITIVE_PROGRAMMING_FORM, OTHER_MODULES_FORM } from "../../constants/formLinks.constants";

const ModulesContainer: React.FC = () => {
    const modules = [
        {
            id: 1,
            title: "Competitive Programming",
            subtitle: "Algorithm Mastery Challenge",
            description: "An annual programming contest where top teams from each batch compete through multiple rounds, tackling up to five problems from basics to dynamic programming. Finalists form houses that battle for the title. Team size: 1-3.",
            image: "/po-without-bg.png",
            glowColor: "#FF6B35",
            titleColor: "#E55A2B",
            registrationFee: "PKR 500",
            date: "TBD",
            teamSize: "2-3 members",
            registrationLink: COMPETITIVE_PROGRAMMING_FORM,
            rulebookLink: "#"
        },
        {
            id: 2,
            title: "Hackathon",
            subtitle: "Innovation Sprint Challenge",
            description: "An intense coding marathon where participants design, develop, and deploy innovative solutions within a limited time. Open to all skill levels, the competition tests creativity, problem-solving, and teamwork through real-world challenges that demand both technical expertise and collaboration.",
            image: "/shifu-without-bg.png",
            glowColor: "#8B4513",
            titleColor: "#7A3E11",
            registrationFee: "PKR 800",
            date: "TBD",
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "#"
        },
        {
            id: 3,
            title: "Data Dash",
            subtitle: "Data Visualization Challenge",
            description: "A beginner-friendly data visualization challenge where teams of 2–3 students analyze real-world datasets to uncover meaningful insights. Open to participants from all disciplines, the competition blends analytical and creative visualization techniques to answer both numerical and qualitative questions",
            image: "/ping-without-bg.png",
            glowColor: "#FFD700",
            titleColor: "#E6C200",
            registrationFee: "PKR 800",
            date: "TBD",
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "#"
        },
        {
            id: 4,
            title: "CHI PARADOX",
            subtitle: "Riddles, Clues and Hidden Challenges",
            description: "Chi Paradox takes you into the thrilling world of Kung Fu Panda, where every challenge tests your focus, logic and balance. step into the shoes of a true warrior as you face 7 mystical stages filled with hidden clues and tricky puzzles.",
            image: "/kai-modules-img.png",
            glowColor: "#19FB00",
            titleColor: "#0F9800",
            registrationFee: "PKR 800",
            date: "TBD",
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "#"
        },
        {
            id: 5,
            title: "CODE-FU",
            subtitle: "Code Debugging",
            description: "Chi Paradox takes you into the thrilling world of Kung Fu Panda, where every challenge tests your focus, logic and balance. step into the shoes of a true warrior as you face 7 mystical stages filled with hidden clues and tricky puzzles.",
            image: "/code-fu-modules.png",
            glowColor: "#FF8706",
            titleColor: "#F27D00",
            registrationFee: "PKR 800",
            date: "TBD",
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "#"
        },
        {
            id: 6,
            title: "PITCH WARRIORS",
            subtitle: "Fast Paced Pitching Challenges",
            description: "Chi Paradox takes you into the thrilling world of Kung Fu Panda, where every challenge tests your focus, logic and balance. step into the shoes of a true warrior as you face 7 mystical stages filled with hidden clues and tricky puzzles.",
            image: "/pitch-warriors-modules.png",
            glowColor: "#F70000",
            titleColor: "#E40000",
            registrationFee: "PKR 800",
            date: "TBD",
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "#"
        }
    ];

    const handleRegister = (moduleTitle: string) => {
        console.log(`Registering for ${moduleTitle}`);
        // registration link
    };

    const handleRulebook = (moduleTitle: string) => {
        console.log(`Opening rulebook for ${moduleTitle}`);
        // rule book link
    };

    return (
        <section id="about" className="bg-[#FEFEEA] z-10">
            <div
                className="relative rounded-t-[24px] sm:rounded-t-[32px] bg-[#7E0000] text-[#FEFEEA] 
                   overflow-hidden shadow-xl py-8 sm:py-12"
            >
                <div className="p-5 sm:p-8 lg:p-20 w-full max-w-7xl mx-auto">
                    {/* Header Text */}
                    <motion.div
                        className="flex flex-col justify-center text-center mb-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
                            NEW MODULES
                        </h2>

                        <p className="mt-4 sm:mt-6 text-[13px] sm:text-sm md:text-base lg:text-xl opacity-95">
                            Explore exciting new challenges that test your skills, sharpen your focus, and unleash your inner warrior!
                        </p>
                    </motion.div>

                    {/* Module Cards */}
                    <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                            >
                                <ModuleCard
                                    title={module.title}
                                    subtitle={module.subtitle}
                                    description={module.description}
                                    image={module.image}
                                    glowColor={module.glowColor}
                                    titleColor={module.titleColor}
                                    registrationFee={module.registrationFee}
                                    date={module.date}
                                    teamSize={module.teamSize}
                                    registrationLink={module.registrationLink}
                                    rulebookLink={module.rulebookLink}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModulesContainer;

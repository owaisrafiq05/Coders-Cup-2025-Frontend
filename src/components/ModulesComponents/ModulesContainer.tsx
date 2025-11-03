import { motion } from "framer-motion";
import ModuleCard from "./ModuleCard";
import { COMPETITIVE_PROGRAMMING_FORM, OTHER_MODULES_FORM } from "../../constants/formLinks.constants";

const ModulesContainer: React.FC = () => {
    const modules = [

        {
            id: 1,
            title: "CHI PARADOX",
            subtitle: "Riddles, Clues and Hidden Challenges",
            description: "Chi Paradox takes you into the thrilling world of Kung Fu Panda, where every challenge tests your focus, logic and balance. step into the shoes of a true warrior as you face 7 mystical stages filled with hidden clues and tricky puzzles.",
            image: "/kai-modules-img.png",
            glowColor: "#19FB00",
            titleColor: "#0F9800",
            registrationFee: "PKR 800",
            scheduleInfo: {
                date: "20th November 2024",
                startTime: "10:45 AM",
                duration: "2 hours"
            },
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "/ruleBook/Chi Paradox By PROCOM.pdf"
        },
        {
            id: 1,
            title: "CODE-FU",
            subtitle: "Code Debugging",
            description: "Every great quest hides a mystery and this one begins deep within your code. Face the Furious Five, conquer their unique debugging challenges, and collect the missing pieces of a hidden riddle. ",
            image: "/code-fu-modules.png",
            glowColor: "#FF8706",
            titleColor: "#F27D00",
            registrationFee: "PKR 800",
            scheduleInfo: {
                date: "19th November 2024",
                startTime: "10:45 AM",
                duration: "2 hours"
            },
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "/ruleBook/Code Fu Debugging trials.pdf"
        },
        {
            id: 3,
            title: "PITCH WARRIORS",
            subtitle: "Fast Paced Pitching Challenges",
            description: "Participants engage in Fast-Paced Pitching Challenges, starting with an elevator pitch round where a team member promotes a random surprise product, judged on Clarity, Persuasiveness, and Creativity, with top team advancing.",
            image: "/pitch-warriors-modules.png",
            glowColor: "#F70000",
            titleColor: "#E40000",
            registrationFee: "PKR 800",
            scheduleInfo: {
                date: "19th November 2024"
            },
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "/ruleBook/Pitch Warriors.pdf"
        },
        {
            id: 4,
            title: "Hackathon",
            subtitle: "Innovation Sprint Challenge",
            description: "Guided by the wisdom of Master Shifu, participants will face diverse challenging testing their problem solving, technical, and teamwork skills. Whether you’re a beginner or a Black-Belt Coder, the Dojo welcomes all!",
            image: "/shifu-without-bg.png",
            glowColor: "#8B4513",
            titleColor: "#7A3E11",
            registrationFee: "PKR 800",
            scheduleInfo: {
                onlineStart: "17th November 2024",
                duration: "48 hours",
                finalPresentation: "19th November 2024 at FAST"
            },
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "/ruleBook/General Rules.pdf"
        },
        {
            id: 5,
            title: "Data Dash",
            subtitle: "THE ULTIMATE VISUALIZATION COMPETITION",
            description: "Data Dash is a beginner-friendly data visualization competition where you explore a real-world dataset, perform analysis, and uncover meaningful insights.",
            image: "/ping-without-bg.png",
            glowColor: "#FFD700",
            titleColor: "#E6C200",
            registrationFee: "PKR 800",
            scheduleInfo: {
                date: "19th November 2024",
                startTime: "10:45 AM",
                duration: "2 hours"
            },
            teamSize: "2-3 members",
            registrationLink: OTHER_MODULES_FORM,
            rulebookLink: "/ruleBook/Data Dash.pdf"
        },
        {
            id: 6,
            title: "Competitive Programming",
            subtitle: "THE ULTIMATE TEST OF LOGIC",
            description: "Prepare for the Ultimate test of logic, creativity, and code! Top teams from every batch face off to to claim the Coders Cup. House Captains draft their dream teams for the finale. One house will rise above all to claim ultimate Glory.",
            image: "/po-without-bg.png",
            glowColor: "#FF6B35",
            titleColor: "#E55A2B",
            registrationFee: "PKR 500",
            scheduleInfo: {
                qualifiers: "10th - 17th November 2024",
                finals: "18th November 2024 (Coders Tank + Final Round)"
            },
            teamSize: "2-3 members",
            registrationLink: COMPETITIVE_PROGRAMMING_FORM,
            rulebookLink: "/ruleBook/Competitive Programming.pdf"
        },
    ];

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
                                    scheduleInfo={module.scheduleInfo}
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

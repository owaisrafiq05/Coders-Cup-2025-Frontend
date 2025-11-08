import { motion } from "framer-motion";
import { Calendar, Clock, Users, Trophy, Target, Zap } from "lucide-react";
import { COMPETITIVE_PROGRAMMING_FORM } from "../../constants/formLinks.constants";

const CompetitionDetails = () => {
    const details = [
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Competition Schedule",
            content: [
                "Qualifiers: November 10-17, 2024",
                "Coders Tank (Bidding): November 18, 2024",
                "Grand Finale: November 18, 2024"
            ]
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Format & Duration",
            content: [
                "Qualifiers: 1-2 hours per batch",
                "3-5 algorithmic problems",
                "Prizes for runners up and winners from every batch",
                "Online platform"
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Formation",
            content: [
                "Team size: 2-3 members",
                "Only FAST students eligible",
                "House system for finals",
                "Captain bidding process"
            ]
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Competition Levels",
            content: [
                "Beginner to advanced problems",
                "Dynamic programming challenges",
                "Algorithm optimization",
                "Time complexity focus"
            ]
        }
    ];

    const highlights = [
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Ultimate Glory",
            description: "Compete for the prestigious Coders Cup and claim your place among FAST's coding elite"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "House System",
            description: "Experience the thrill of house-based competition with strategic team formation"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Skill Development",
            description: "Challenge yourself with problems ranging from basics to advanced algorithms"
        }
    ];

    return (
        <section className="bg-[#FEFEEA] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            {/* Background image */}
            <div className="absolute hidden sm:flex items-center justify-center opacity-30 w-full h-full overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-[#930000] uppercase leading-[1] text-center mb-4">
                        Competition Details
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                        Everything you need to know about the ultimate coding competition at FAST University
                    </p>
                </motion.div>

                {/* Competition Highlights */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#930000]/10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#930000] rounded-full flex items-center justify-center text-white mr-4">
                                    {highlight.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#930000]">{highlight.title}</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detailed Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {details.map((detail, index) => (
                        <motion.div
                            key={detail.title}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#930000]/10 hover:border-[#930000]/30"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-[#930000] rounded-full flex items-center justify-center text-white mr-3">
                                    {detail.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#930000]">{detail.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {detail.content.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                                        <span className="w-2 h-2 bg-[#D99413] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="bg-gradient-to-r from-[#930000] to-[#7E0000] rounded-2xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Join the Battle?</h3>
                        <p className="text-lg sm:text-xl mb-6 opacity-95">
                            Register now and prove your coding prowess in the ultimate programming competition
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/modules"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#930000] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                            >
                                View All Modules
                            </a>
                            <a
                                href={COMPETITIVE_PROGRAMMING_FORM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 bg-[#D99413] text-white rounded-lg font-semibold hover:bg-[#c4820f] transition-colors duration-200"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompetitionDetails;
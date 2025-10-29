import { motion } from "framer-motion";

interface ModuleCardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    glowColor: string;
    titleColor: string;
    registrationFee: string;
    date: string;
    teamSize: string;
    registrationLink: string;
    rulebookLink: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
    title,
    subtitle,
    description,
    image,
    glowColor,
    titleColor,
    registrationFee,
    date,
    teamSize,
    registrationLink,
    rulebookLink,
}) => {
    return (
        <motion.div
            className="relative rounded-2xl p-4 sm:p-6 bg-[#ffe6af] 
                 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between"
            style={{
                boxShadow: `0 8px 32px ${glowColor}40, 0 4px 16px ${glowColor}20`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            {/* Mobile Image - Above Title */}
            <div className="flex justify-start mb-4 sm:hidden">
                <div className="w-20 h-20 relative">
                    <div
                        className="absolute inset-0 rounded-full opacity-30 blur-md"
                        style={{
                            background: `radial-gradient(circle, ${glowColor}60, transparent 70%)`,
                        }}
                    />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover relative z-10 rounded-full"
                        style={{
                            filter: `drop-shadow(0 0 8px ${glowColor}40)`,
                        }}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 sm:pr-24 md:pr-36">
                <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                    style={{ color: titleColor }}
                >
                    {title}
                </h3>

                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#353535] mb-3 sm:mb-4">
                    {subtitle}
                </h4>

                <p className="text-xs sm:text-sm md:text-base text-[#353535] opacity-80 leading-relaxed mb-3 sm:mb-4">
                    {description}
                </p>

                {/* Registration Details */}
                <div className="mb-4 sm:mb-6 p-3 rounded-lg border border-white/30">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-[#353535] opacity-70 uppercase tracking-wide">Fee</span>
                            <span className="text-sm sm:text-base font-bold text-[#353535]">{registrationFee}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-[#353535] opacity-70 uppercase tracking-wide">Date</span>
                            <span className="text-sm sm:text-base font-bold text-[#353535]">{date}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-[#353535] opacity-70 uppercase tracking-wide">Team Size</span>
                            <span className="text-sm sm:text-base font-bold text-[#353535]">{teamSize}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto relative z-10">
                <a
                    href={registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-[#353535] text-[#FEFEEA] rounded-lg 
                     hover:bg-[#4a4a4a] transition-colors duration-200 
                     text-xs sm:text-sm font-medium text-center cursor-pointer"
                >
                    Register Now ↗
                </a>

                <button
                    onClick={() => window.open(rulebookLink, "_blank")}
                    className="px-3 sm:px-4 py-2 bg-[#353535] text-[#FEFEEA] rounded-lg 
                     hover:bg-[#4a4a4a] transition-colors duration-200 
                     text-xs sm:text`-sm font-medium text-center cursor-pointer"
                >
                    Rulebook ↗
                </button>
            </div>

            {/* Desktop Image - Bottom Right */}
            <div className="hidden sm:block absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 z-0">
                <div
                    className="absolute inset-0 opacity-30 blur-md"
                    style={{
                        background: `radial-gradient(circle, ${glowColor}60, transparent 70%)`,
                    }}
                />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover relative z-10"
                    style={{
                        filter: `drop-shadow(0 0 8px ${glowColor}40)`,
                    }}
                />
            </div>

            {/* Glow Effect Overlay */}
            <div
                className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 70% 30%, ${glowColor}30, transparent 70%)`,
                }}
            />
        </motion.div>
    );
};

export default ModuleCard;
import { motion } from "framer-motion";
import ScrollIndicator from "../GlobalComponents/ScrollIndicator";

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] font-outfit sm:min-h-screen
     px-4 sm:px-6 lg:px-8 
        flex flex-col items-center justify-center sm:block rounded-t-[24px] sm:rounded-t-[32px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <div className="absolute hidden sm:flex items-center justify-center opacity-20 w-screen h-full overflow-hidden">
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
                <img
                    src="cropped-hero-bg.png"
                    alt="trophy background"
                    className="absolute w-full bg-[#FEFEEA] opacity-90 max-w-3xl md:max-w-4xl lg:max-w-6xl object-contain pointer-events-none select-none"
                />
            </div>
            <motion.div
                className="relative mx-auto max-w-7xl py-8 -mb-16 sm:mb-0 sm:-mt-[40px] sm:py-8 flex flex-col justify-center items-center gap-4 sm:gap-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.img
                    src="coderscup-hero.png"
                    alt="ACM brings you the Coders Cup — unleash your inner dragon!"
                    className="w-full object-contain mt-2 sm:mt-14 max-h-[120px] sm:max-h-[140px] md:max-h-[160px] lg:max-h-[180px] max-w-[80px] sm:max-w-[90px] md:max-w-[110px] lg:max-w-[122px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                />
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-[#930000] leading-[1] text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    Choose. <br /> Challenge. <br /> Conquer it all.
                </motion.h2>

                <motion.p
                    className="max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1200px] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[28px] text-center text-gray-900 
                    px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1 md:py-3
                    "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    Step into a world of skill, strategy, and speed.{" "}
                    <span className="text-[#930000]">
                        From cracking codes to outsmarting riddles
                    </span>
                    , each module pushes you closer to mastery. Choose your{" "}
                    <span className="text-[#930000]">Modules</span>{" "}
                    and rise through the ranks.
                </motion.p>
            </motion.div>
            <div className="sm:flex sm:justify-center mb-[1rem] mt-6 sm:mt-0">
                <ScrollIndicator />
            </div>
        </section>
    );
};

export default Hero;

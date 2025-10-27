"use client";

import { useState } from "react";
import RegistrationModal from "../GlobalComponents/RegistrationModal";
import { motion } from "framer-motion";

export default function ModulePrizeSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="rounded-t-[24px] sm:rounded-t-[32px] bg-[#FEFEEA] py-8 sm:py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    className="text-[#7E0000] flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Title */}
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#7E0000] uppercase tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        PRIZES FOR TOP PERFORMERS
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-[#7E0000] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 opacity-95 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        Winner and runners up from each batch irrespective of the house won.
                    </motion.p>

                    {/* Coming Soon Text */}
                    <motion.div
                        className="mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="text-[#7E0000] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider opacity-90">
                            TO BE ANNOUNCED SOON...
                        </p>
                    </motion.div>

                    {/* Register Button */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center cursor-pointer justify-center rounded-full bg-[#7E0000] text-[#FEFEEA]
                         font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
                        >
                            Register Now
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}
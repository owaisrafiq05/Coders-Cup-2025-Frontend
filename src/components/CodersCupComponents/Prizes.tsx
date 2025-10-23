"use client";

import { useState } from "react";
import RegistrationModal from "../GlobalComponents/RegistrationModal";

export default function Prizes() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="rounded-t-[50px] bg-[#7E0000] py-8 sm:py-12 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-[#FEFEEA] flex flex-col items-center justify-center text-center">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#FEFEEA] uppercase tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight">
                        PRIZES FOR TOP PERFORMERS
                    </h1>

                    {/* Description */}
                    <p className="text-[#FEFEEA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 opacity-95 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                        Winner and runners up from each batch irrespective of the house won.
                    </p>

                    {/* Coming Soon Text */}
                    <div className="mb-6 sm:mb-8 ">
                        <p className="text-[#FEFEEA] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider opacity-90">
                            TO BE ANNOUNCED SOON...
                        </p>
                    </div>

                    {/* Register Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center cursor-pointer justify-center rounded-full bg-[#FEFEEA] text-[#930000]
                         font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}
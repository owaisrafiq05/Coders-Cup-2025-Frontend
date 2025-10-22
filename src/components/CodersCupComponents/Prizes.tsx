"use client";

export default function Prizes() {
    return (
        <section className="rounded-t-[50px] bg-[#7E0000] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-[#FEFEEA] flex flex-col items-center justify-center text-center">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#FEFEEA] uppercase tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight">
                        PRIZES FOR TOP PERFORMERS
                    </h1>

                    {/* Description */}
                    <p className="text-[#FEFEEA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 opacity-95 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                        Winner and runners up from each batch irrespective of the house won.
                    </p>

                    {/* Coming Soon Text */}
                    <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <p className="text-[#FEFEEA] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider opacity-90">
                            TO BE ANNOUNCED SOON...
                        </p>
                    </div>

                    {/* Register Button */}
                    <div className="flex justify-center">
                        <button className="inline-flex items-center justify-center rounded-full bg-[#FEFEEA] text-[#930000] font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
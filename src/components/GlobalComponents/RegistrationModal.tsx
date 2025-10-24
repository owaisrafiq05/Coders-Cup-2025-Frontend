import React from "react";
import { X, Code2, Layers } from "lucide-react";

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    const THEME = {
        primary: "#930000",
        dark: "#7E0000",
        neutral: "#131313",
        accent: "#D99413",
        background: "#FEFEEA",
    };

    const COMPETITIVE_PROGRAMMING_FORM = "https://forms.gle/your-cp-form-link";
    const OTHER_MODULES_FORM = "https://forms.gle/your-modules-form-link";

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn "
            onClick={handleBackdropClick}
        >
            <div
                className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-slideUp mx-10"
                style={{ backgroundColor: THEME.background }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-6 pt-2 sm:pt-4 mt-2"
                >
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide" style={{ color: THEME.primary }}>
                        REGISTRATION
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-black/10 transition-colors text-black cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4" style={{ backgroundColor: THEME.background }}>
                    {/* ============================================ */}
                    {/* REGISTRATION OPENING SOON MESSAGE */}
                    {/* ============================================ */}
                    <div className="pt-8 pb-4 px-6 text-center">
                        <div className="mb-6">
                            <div
                                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                                style={{ backgroundColor: THEME.primary }}
                            >
                                <Code2 size={30} style={{ color: THEME.background }} />
                            </div>
                            <h3
                                className="text-2xl sm:text-3xl font-bold mb-3"
                                style={{ color: THEME.primary }}
                            >
                                Registration Opening Soon!
                            </h3>
                            <p
                                className="text-base sm:text-lg opacity-80"
                                style={{ color: THEME.neutral }}
                            >
                                Stay tuned for updates. Registration will open shortly.
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-8">
                            {/* <a href="https://www.fyltr.co/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="fyltr.png"
                                    className="w-30 cursor-pointer sm:w-40 mx-auto"
                                    alt="Powered by Fyltr"
                                />
                            </a> */}

                            <p
                                className="text-center text-xs opacity-60 mt-2"
                                style={{ color: THEME.neutral }}
                            >
                                Need help?{" "}
                                <a
                                    href="mailto:acm@nu.edu.pk"
                                    className="underline hover:opacity-80"
                                    style={{ color: THEME.primary }}
                                >
                                    khi.acm@nu.edu.pk
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* ============================================ */}
                    {/* COMMENTED OUT - ACTIVE REGISTRATION CONTENT */}
                    {/* Uncomment below to enable registration forms */}
                    {/* ============================================ */}
                    {/* <div
                        onClick={() => window.open(COMPETITIVE_PROGRAMMING_FORM, "_blank")}
                        className="p-4 rounded-xl hover:shadow-lg transition-all cursor-pointer" style={{ backgroundColor: THEME.primary }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className="p-2.5 rounded-full"
                                style={{ backgroundColor: THEME.background }}
                            >
                                <Code2 size={15} style={{ color: THEME.primary }} />
                            </div>
                            <h3
                                className="text-sm sm:text-base font-semibold uppercase"
                                style={{ color: THEME.background }}
                            >
                                Competitive Programming
                            </h3>
                        </div>
                        <p
                            className="text-sm opacity-80 mb-3"
                            style={{ color: THEME.background }}
                        >
                            FASTians only - Join Coder’s Cup and test your algorithmic skills!
                        </p>
                        {/* <button
                            className="w-full inline-flex items-center justify-center rounded-full bg-[#930000] text-[#FEFEEA]
                           font-semibold px-10 text-sm sm:px-15 py-2.5 hover:shadow-lg transition-shadow duration-200"
                        >
                            Register
                        </button>
                        <div className="mt-6 md:mt-8">
                            <a
                                href="#modules"
                            // className="inline-flex items-center justify-center px-6 md:px-7 lg:px-8 py-3 md:py-3.5 lg:py-4 text-[#FEFEEA] font-semibold rounded-[40px] transition-all duration-200 hover:scale-[1.02]"
                            >
                                Explore Modules
                            </a>
                        </div> */}
                    {/* </div> */}

                    {/* Other Modules Option */}
                    {/* <div
                        onClick={() => window.open(OTHER_MODULES_FORM, "_blank")}
                        className="p-4 rounded-xl hover:shadow-lg transition-all cursor-pointer" style={{ backgroundColor: THEME.primary }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className="p-2.5 rounded-full"
                                style={{ backgroundColor: THEME.background }}
                            >
                                <Layers size={20} style={{ color: THEME.primary }} />
                            </div>
                            <h3
                                className="text-sm sm:text-base font-semibold uppercase"
                                style={{ color: THEME.background }}
                            >
                                Other Modules
                            </h3>
                        </div>
                        <p
                            className="text-sm opacity-80 mb-3"
                            style={{ color: THEME.background }}
                        >
                            Open to all — explore AI Analytics, Hackathons, Debugging, and more!
                        </p>
                        {/* <button
                            className="w-full py-2 text-sm font-semibold rounded-lg transition-all"
                            style={{
                                backgroundColor: THEME.dark,
                                color: "white",
                                border: `1px solid ${THEME.accent}`,
                            }}
                        >
                            Register
                        </button> */}
                    {/* </div> */}

                    {/* Explore Button */}
                    {/* <div className="pt-2 text-center">
                        <a
                            href="/modules"
                            onClick={onClose}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105"
                            style={{
                                backgroundColor: THEME.accent,
                                color: THEME.neutral,
                                border: `1px solid ${THEME.primary}`,
                            }}
                        >
                            <Layers size={16} />
                            Explore All Modules
                        </a>
                    </div> */}

                    {/* Footer - COMMENTED OUT */}
                    {/* <div className="mt-3 ">
                        <a href="https://www.fyltr.co/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="fyltr.png"
                                className="w-30 cursor-pointer sm:w-40 mx-auto"
                                alt="Powered by Fyltr"
                            />
                        </a>

                        <p
                            className="text-center text-xs opacity-60 mt-2"
                            style={{ color: THEME.neutral }}
                        >
                            Need help?{" "}
                            <a
                                href="mailto:acm@nu.edu.pk"
                                className="underline hover:opacity-80"
                                style={{ color: THEME.primary }}
                            >
                                khi.acm@nu.edu.pk
                            </a>
                        </p>
                    </div> */}
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.25s ease-out; }
      `}</style>
        </div>
    );
};

export default RegistrationModal;

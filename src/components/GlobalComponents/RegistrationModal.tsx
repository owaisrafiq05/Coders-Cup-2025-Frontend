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

    const COMPETITIVE_PROGRAMMING_FORM = "https://www.fyltr.co/f/5d5e6c8c-38fd-4c8f-8625-e20fff0fc181";

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
                    {/* Competitive Programming Module */}
                    <div
                        onClick={() => window.open(COMPETITIVE_PROGRAMMING_FORM, "_blank")}
                        className="p-4 rounded-xl hover:shadow-lg transition-all cursor-pointer" 
                        style={{ backgroundColor: THEME.primary }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className="p-2.5 rounded-full"
                                style={{ backgroundColor: THEME.background }}
                            >
                                <Code2 size={20} style={{ color: THEME.primary }} />
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
                            FASTians only - Join Coder's Cup and test your algorithmic skills!
                        </p>
                        <button
                            className="w-full py-2 text-sm font-semibold rounded-lg transition-all"
                            style={{
                                backgroundColor: THEME.background,
                                color: THEME.primary,
                            }}
                        >
                            Register Now
                        </button>
                    </div>

                    {/* Other Modules Option */}
                    <div
                        className="p-4 rounded-xl transition-all opacity-60" 
                        style={{ backgroundColor: THEME.primary }}
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
                        <button
                            className="w-full py-2 text-sm font-semibold rounded-lg transition-all cursor-not-allowed"
                            style={{
                                backgroundColor: THEME.background,
                                color: THEME.neutral,
                                opacity: 0.7
                            }}
                            disabled
                        >
                            Registration Coming Soon
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-6">
                        <p
                            className="text-center text-xs opacity-60"
                            style={{ color: THEME.neutral }}
                        >
                            Need help?{" "}
                            <a
                                href="mailto:khi.acm@nu.edu.pk"
                                className="underline hover:opacity-80"
                                style={{ color: THEME.primary }}
                            >
                                khi.acm@nu.edu.pk
                            </a>
                        </p>
                    </div>

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

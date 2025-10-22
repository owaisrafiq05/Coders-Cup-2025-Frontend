import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Gallery = ({ images = [], autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  if (images.length === 0) return null;

  // Helper to loop index
  const getIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

// Responsive positions
const positions = isMobile
  ? [
      { offset: -1, x: -120, scale: 0.8, opacity: 0.5, zIndex: 5, size: "w-[260px] h-[180px]" },
      { offset: 0,  x: 0,    scale: 1,   opacity: 1,   zIndex: 10, size: "w-[360px] h-[260px]" },
      { offset: 1,  x: 120,  scale: 0.8, opacity: 0.5, zIndex: 5, size: "w-[260px] h-[180px]" },
    ]
  : [
      { offset: -2, x: -340, scale: 0.7, opacity: 0.3, zIndex: 1, size: "w-[340px] h-[220px]" },
      { offset: -1, x: -200, scale: 0.85, opacity: 0.6, zIndex: 5, size: "w-[420px] h-[260px]" },
      { offset: 0,  x: 0,    scale: 1,   opacity: 1,   zIndex: 10, size: "w-[600px] h-[360px]" },
      { offset: 1,  x: 200,  scale: 0.85, opacity: 0.6, zIndex: 5, size: "w-[420px] h-[260px]" },
      { offset: 2,  x: 340,  scale: 0.7, opacity: 0.3, zIndex: 1, size: "w-[340px] h-[220px]" },
    ];


  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-[6rem] py-8 md:py-32">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-[#930000]">
        GALLERY...
        </h2>
      </div>

      {/* Navigation Arrows - Mobile Only - Below Heading */}
      {/* {isMobile && (
        <div className="flex justify-end mb-[-2.5rem] px-4 md:hidden">
          <div className="flex space-x-2">
            <button
              onClick={goToPrevious}
              className="bg-[#0B466D] hover:bg-[#257fb5] rounded-full p-3 shadow-lg transition-all duration-200"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="bg-[#0B466D] hover:bg-[#257fb5] rounded-full p-3 shadow-lg transition-all duration-200"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )} */}

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center overflow-hidden h-[280px] md:h-[380px]">
        {positions.map((pos) => {
          const imageIndex = getIndex(pos.offset);
          return (
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0, scale: 0.8, x: 0 }}
              animate={{
                x: pos.x,
                scale: pos.scale,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
              }}
              transition={{ duration: 0.6 }}
              className="absolute rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={images[imageIndex]}
                alt={`Slide ${imageIndex + 1}`}
                className={`object-cover rounded-3xl transition-all duration-500 ${pos.size}`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#930000] scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
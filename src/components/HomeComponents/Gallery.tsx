import { useState, useEffect } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images
  const images = [
    "about-img.png",
    "oogway.png",
    "module-pic.png",
    "about-img.png",
    "oogway.png",
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Helper to get image index with offset
  const getImageIndex = (offset: number): number => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <section className="relative bg-[#FFF8E7] w-full py-14 md:py-20 overflow-visible">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="modules-circle-bg.png"
          alt="gallery section decorative background"
          className="w-full max-w-7xl opacity-90 object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[#930000] text-[36px] md:text-[44px] lg:text-[48px] leading-[1] font-black">
            GALLERY...
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex justify-center items-center overflow-hidden">
          {/* Main carousel */}
          <div className="relative w-full max-w-5xl h-[300px] md:h-[400px] flex items-center justify-center">
            {/* Previous image (left) */}
            <div className="absolute left-0 w-[200px] md:w-[250px] h-[150px] md:h-[200px] opacity-60 transform -translate-x-4 md:-translate-x-8">
              <img
                src={images[getImageIndex(-1)]}
                alt="Previous gallery image"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Current image (center) */}
            <div className="relative z-10 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[280px] lg:h-[350px]">
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Next image (right) */}
            <div className="absolute right-0 w-[200px] md:w-[250px] h-[150px] md:h-[200px] opacity-60 transform translate-x-4 md:translate-x-8">
              <img
                src={images[getImageIndex(1)]}
                alt="Next gallery image"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[#930000] hover:bg-[#7E0000] text-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 z-20"
              aria-label="Previous image"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
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
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[#930000] hover:bg-[#7E0000] text-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 z-20"
              aria-label="Next image"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
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

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
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
    </section>
  );
};

export default Gallery;

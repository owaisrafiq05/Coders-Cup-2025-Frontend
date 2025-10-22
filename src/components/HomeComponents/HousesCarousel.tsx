"use client";

import type React from "react";
import { useState } from "react";

type HouseItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
};

const items: HouseItem[] = [
  {
    id: "po",
    title: "Po Panda",
    subtitle: "The Unpredictable Force",
    image: "/po.jpg",
  },
  {
    id: "oogway",
    title: "Oogway",
    subtitle: "Ancient Wisdom",
    image: "/oogway.png",
  },
  {
    id: "tai",
    title: "Tai Lung",
    subtitle: "Relentless Power",
    image: "/tai.png",
  },
  {
    id: "mantis",
    title: "Mantis",
    subtitle: "Precision & Stings",
    image: "/shen.png",
  },
];

const HousesCarousel: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("po");

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const handleMouseEnter = (id: string) => {
    setExpandedId(id);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 370px) {
            .very-small-screen {
              display: none !important;
            }
            .normal-screen {
              display: flex !important;
            }
          }
          @media (max-width: 369px) {
            .very-small-screen {
              display: block !important;
            }
            .normal-screen {
              display: none !important;
            }
          }
        `
      }} />
      <section className="w-full bg-[#930000] text-[#FEFEEA] rounded-[32px] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
              HOUSES
            </h2>
            <p className="mt-4 sm:mt-6 leading-relaxed text-[13px] sm:text-sm md:text-base lg:text-2xl opacity-95">
              Only The Worthy Shall Rise
            </p>
          </div>

          <div className="flex justify-center px-2 sm:px-4">
            <div className="w-full flex justify-center md:justify-center">
              {/* Vertical layout for very small screens (below 370px) */}
              <div className="block sm:hidden w-full max-w-xs very-small-screen">
                <div className="flex flex-col gap-3">
                  {items.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className={`
                        group/card relative rounded-2xl overflow-hidden cursor-pointer border-2
                        border-[#D99413]/60 bg-black/10
                        transition-all duration-500 ease-in-out
                        ${expandedId === card.id ? "h-48" : "h-16"}
                        w-full
                      `}
                    >
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`
                            text-[#FEFEEA]/95 font-semibold tracking-wide uppercase
                            text-sm drop-shadow
                            transition-all duration-500 ease-in-out
                            ${expandedId === card.id ? "opacity-0" : "opacity-100"}
                          `}
                        >
                          {card.title}
                        </span>
                      </div>

                      <div
                        className={`
                          absolute bottom-0 left-0 right-0 p-4
                          bg-gradient-to-t from-black/80 via-black/40 to-transparent
                          transition-all duration-500 ease-in-out
                          ${expandedId === card.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                          }
                        `}
                      >
                        <h3 className="text-white text-lg font-semibold drop-shadow">
                          {card.title}
                        </h3>
                        {card.subtitle && (
                          <p className="text-white/90 text-sm mt-1 drop-shadow">
                            {card.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horizontal layout for screens 370px and above */}
              <div
                className="
                  hidden sm:flex gap-2 sm:gap-3 md:gap-4
                  h-[260px] sm:h-[340px] md:h-[380px] lg:h-[420px]
                  overflow-x-hidden snap-x md:snap-none
                  md:justify-center
                  pb-2 md:pb-0
                  normal-screen
                "
              >
                {items.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    className={`
                      group/card relative rounded-2xl overflow-hidden cursor-pointer border-2
                      border-[#D99413]/60 bg-black/10 snap-start flex-shrink-0
                      transition-all duration-500 ease-in-out
                      basis-12 sm:basis-14 md:basis-20 lg:basis-24
                      ${expandedId === card.id
                        ? "basis-40 sm:basis-48 md:basis-64 lg:basis-80"
                        : ""
                      }
                      md:hover:basis-64 lg:hover:basis-80
                      hover:scale-105 md:hover:scale-100
                    `}
                    style={{ minWidth: 48 }}
                  >
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`
                          text-[#FEFEEA]/95 font-semibold tracking-wide uppercase
                          text-xs sm:text-sm drop-shadow
                          transition-all duration-500 ease-in-out
                          ${expandedId === card.id
                            ? "opacity-0 rotate-0"
                            : "opacity-100 -rotate-90"
                          }
                          md:group-hover/card:opacity-0 md:group-hover/card:rotate-0
                        `}
                      >
                        {card.title}
                      </span>
                    </div>

                    <div
                      className={`
                        absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        transition-all duration-500 ease-in-out
                        ${expandedId === card.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                        }
                        md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0
                        md:opacity-0 md:translate-y-4
                      `}
                    >
                      <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-white/90 text-xs sm:text-sm mt-1 drop-shadow">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 md:mt-10 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#FEFEEA] text-[#930000]
                         font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
            >
              Know More…
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HousesCarousel;
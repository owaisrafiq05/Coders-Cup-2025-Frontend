"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

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
    id: "shen",
    title: "Lord Shen",
    subtitle: "Sharp Mind, Sharper Blades",
    image: "/shen.png",
  },
];

const HousesCarousel: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("po");

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const handleCardEnter = (id: string) => {
    setExpandedId(id);
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 768px) {
            .mobile-layout {
              display: none !important;
            }
            .desktop-layout {
              display: flex !important;
            }
          }
          @media (max-width: 767px) {
            .mobile-layout {
              display: block !important;
            }
            .desktop-layout {
              display: none !important;
            }
          }
        `,
        }}
      />

      <section className="w-full bg-[#930000] text-[#FEFEEA] rounded-[32px] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div 
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
              HOUSES
            </h2>
            <p className="mt-4 sm:mt-6 leading-relaxed text-[13px] sm:text-sm md:text-base lg:text-2xl opacity-95">
              Only The Worthy Shall Rise
            </p>
          </motion.div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="mobile-layout">
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              {items.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  onClick={() => handleCardClick(card.id)}
                  className={`
                    group/card relative rounded-2xl overflow-hidden cursor-pointer border-2
                    border-[#D99413]/60 bg-black/10 w-full
                    transition-all duration-500 ease-in-out
                    ${expandedId === card.id ? "h-48" : "h-16"}
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
                        text-sm drop-shadow transition-all duration-500 ease-in-out
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Horizontal Carousel */}
          <div className="desktop-layout">
            <div className="flex gap-4 justify-center items-stretch h-[400px] max-w-4xl mx-auto px-4">
              {items.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseEnter={() => handleCardEnter(card.id)}
                  className={`
                    group/card relative rounded-2xl overflow-hidden cursor-pointer border-2
                    border-[#D99413]/60 bg-black/10 flex-shrink-0
                    transition-all duration-500 ease-in-out
                    ${expandedId === card.id ? "w-80" : "w-16"}
                    hover:scale-105
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
                        text-sm drop-shadow transition-all duration-500 ease-in-out
                        ${expandedId === card.id
                          ? "opacity-0 rotate-0"
                          : "opacity-100 -rotate-90"
                        }
                      `}
                    >
                      {card.title}
                    </span>
                  </div>

                  <div
                    className={`
                      absolute bottom-0 left-0 right-0 p-6
                      bg-gradient-to-t from-black/80 via-black/40 to-transparent
                      transition-all duration-500 ease-in-out
                      ${expandedId === card.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                      }
                    `}
                  >
                    <h3 className="text-white text-xl font-semibold drop-shadow">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-white/90 text-sm mt-1 drop-shadow">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            className="mt-8 md:mt-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <a
              href="/coders-cup"
              className="inline-flex items-center justify-center rounded-full bg-[#FEFEEA] text-[#930000]
                         font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
            >
              Know More…
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HousesCarousel;
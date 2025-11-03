"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Code2, Gavel, Trophy } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "left" | "right";
}

const events: TimelineEvent[] = [
  {
    id: "1",
    title: "Qualifiers (10-17 Nov)",
    description:
      "Only FASTians can participate. Competitors from each batch face off in a 1-2 hour coding challenge featuring 3-5 algorithmic problems. Top teams from each batch advance to the next stage.",
    icon: <Code2 className="w-6 h-6" />,
    position: "left",
  },
  {
    id: "2",
    title: "Coders Tank (18 Nov)",
    description:
      "House Captains enter the arena to bid on individual participants from the qualified teams to form their House Teams. Strategic bidding determines team composition for the finale.",
    icon: <Gavel className="w-6 h-6" />,
    position: "right",
  },
  {
    id: "3",
    title: "Grand Finale (18 Nov)",
    description:
      "Newly formed house teams compete head-to-head in the final coding showdown to determine the winning house. The ultimate test of logic, creativity, and teamwork.",
    icon: <Trophy className="w-6 h-6" />,
    position: "left",
  },
];

export default function EventTimeline() {
  return (
    <section className="relative min-h-screen px-4">
      {/* Background image */}
      <div className="absolute hidden sm:flex items-center justify-center opacity-30 w-full h-full overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto py-12  md:py-20">
        {/* Title */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-[#930000] uppercase leading-[1] text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          EVENT FORMAT
        </motion.h2>


        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Now visible on mobile too */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2">
            <div className="absolute inset-0 border-l-2 border-dashed border-[#930000]"></div>
          </div>

          {/* Events */}
          <div className="space-y-12 md:space-y-20">
            {events.map((event, index) => (
              <motion.div 
                key={event.id} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                  {event.position === "left" ? (
                    <>
                      {/* Left Card */}
                      <div className="pr-12 mt-2">
                        <div className="bg-[#930000] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 w-full">
                          {/* Background Image Placeholder */}
                          {/* <div className="h-32 bg-gradient-to-br from-[#a50000] to-[#7a0000] relative overflow-hidden">
                            <img
                              src="/event-background.jpg"
                              alt="Event background"
                              className="w-full h-full object-cover opacity-30"
                            />
                          </div> */}
                          {/* Content */}
                          <div className="p-6 md:p-8 text-white h-full flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                              {event.title}
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed opacity-95">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Timeline Icon - Aligned with card top */}
                      <div className="flex justify-start">
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 top-0">
                          <div className="w-16 h-16 bg-[#930000] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-[#f5f1e8]">
                            {event.icon}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Timeline Icon - Aligned with card top */}
                      <div className="flex justify-end">
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 top-0">
                          <div className="w-16 h-16 bg-[#930000] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-[#f5f1e8]">
                            {event.icon}
                          </div>
                        </div>
                      </div>
                      {/* Right Card */}
                      <div className="pl-12 mt-2">
                        <div className="bg-[#930000] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 w-full">
                          {/* Background Image Placeholder */}
                          {/* <div className="h-32 bg-gradient-to-br from-[#a50000] to-[#7a0000] relative overflow-hidden">
                            <img
                              src="/event-background.jpg"
                              alt="Event background"
                              className="w-full h-full object-cover opacity-30"
                            />
                          </div> */}
                          {/* Content */}
                          <div className="p-6 md:p-8 text-white h-full flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                              {event.title}
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed opacity-95">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden relative">
                  {/* Timeline Icon - Aligned with card top for mobile */}
                  <div className="absolute left-6 transform -translate-x-1/2 z-10 top-0">
                    <div className="w-12 h-12 bg-[#930000] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-[#f5f1e8]">
                      {event.icon}
                    </div>
                  </div>
                  {/* Card positioned to the right of timeline */}
                  <div className="ml-16">
                    <div className="bg-[#930000] rounded-2xl overflow-hidden shadow-lg h-48 w-full">
                      {/* Background Image Placeholder */}
                      {/* <div className="h-24 bg-gradient-to-br from-[#a50000] to-[#7a0000] relative overflow-hidden">
                        <img
                          src="/event-background.jpg"
                          alt="Event background"
                          className="w-full h-full object-cover opacity-30"
                        />
                      </div> */}
                      {/* Content */}
                      <div className="p-4 text-white h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-95">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Timeline Dot - Positioned at the end of timeline */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-4 h-4 bg-[#930000] rounded-full shadow-lg border-2 border-[#f5f1e8]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
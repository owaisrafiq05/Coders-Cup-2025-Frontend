"use client"

import type React from "react"

import { Code2, Gavel, Trophy } from "lucide-react"

interface TimelineEvent {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  position: "left" | "right"
}

const events: TimelineEvent[] = [
  {
    id: "1",
    title: "Batch Qualifiers",
    description:
      "Only FASTians can participate. Competitors from each batch face off in a 1-2 hour coding challenge featuring 3-5 algorithmic problems.",
    icon: <Code2 className="w-6 h-6" />,
    position: "left",
  },
  {
    id: "2",
    title: "The Auction War",
    description:
      "House Captains enter the arena to bid on individual participants from the qualified teams to form their House Teams.",
    icon: <Gavel className="w-6 h-6" />,
    position: "right",
  },
  {
    id: "3",
    title: "The Grand Finale",
    description:
      "Newly formed house teams compete head-to-head in the final coding showdown to determine the winning house.",
    icon: <Trophy className="w-6 h-6" />,
    position: "left",
  },
]

export default function EventTimeline() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#ede8df] py-12 px-4 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#930000] mb-16 md:mb-24">EVENT FORMAT</h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 border-l-2 border-dashed border-[#930000]"></div>
          </div>

          {/* Events */}
          <div className="space-y-12 md:space-y-20">
            {events.map((event) => (
              <div key={event.id} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  {event.position === "left" ? (
                    <>
                      {/* Left Card */}
                      <div className="pr-8">
                        <div className="bg-[#930000] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          {/* Background Image Placeholder */}
                          <div className="h-32 bg-gradient-to-br from-[#a50000] to-[#7a0000] relative overflow-hidden">
                            <img
                              src="/event-background.jpg"
                              alt="Event background"
                              className="w-full h-full object-cover opacity-30"
                            />
                          </div>
                          {/* Content */}
                          <div className="p-6 md:p-8 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{event.title}</h3>
                            <p className="text-sm md:text-base leading-relaxed opacity-95">{event.description}</p>
                          </div>
                        </div>
                      </div>
                      {/* Timeline Icon */}
                      <div className="flex justify-start">
                        <div className="relative flex items-center">
                          <div className="absolute -left-12 top-1/2 w-12 h-0.5 bg-[#d4a574] transform -translate-y-1/2"></div>
                          <div className="w-16 h-16 bg-[#930000] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-[#f5f1e8] relative z-10">
                            {event.icon}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Timeline Icon */}
                      <div className="flex justify-end">
                        <div className="relative flex items-center">
                          <div className="absolute -right-12 top-1/2 w-12 h-0.5 bg-[#d4a574] transform -translate-y-1/2"></div>
                          <div className="w-16 h-16 bg-[#930000] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-[#f5f1e8] relative z-10">
                            {event.icon}
                          </div>
                        </div>
                      </div>
                      {/* Right Card */}
                      <div className="pl-8">
                        <div className="bg-[#930000] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          {/* Background Image Placeholder */}
                          <div className="h-32 bg-gradient-to-br from-[#a50000] to-[#7a0000] relative overflow-hidden">
                            <img
                              src="/event-background.jpg"
                              alt="Event background"
                              className="w-full h-full object-cover opacity-30"
                            />
                          </div>
                          {/* Content */}
                          <div className="p-6 md:p-8 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{event.title}</h3>
                            <p className="text-sm md:text-base leading-relaxed opacity-95">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </> 
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#930000] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-[#f5f1e8]">
                      {event.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#930000] rounded-2xl overflow-hidden shadow-lg">
                      {/* Background Image Placeholder */}
                      <div className="h-24 bg-gradient-to-br from-[#a50000] to-[#7a0000] relative overflow-hidden">
                        <img
                          src="/event-background.jpg"
                          alt="Event background"
                          className="w-full h-full object-cover opacity-30"
                        />
                      </div>
                      {/* Content */}
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-sm leading-relaxed opacity-95">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Timeline Dot */}
          <div className="hidden md:flex justify-center mt-12">
            <div className="w-4 h-4 bg-[#930000] rounded-full shadow-lg border-2 border-[#f5f1e8]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

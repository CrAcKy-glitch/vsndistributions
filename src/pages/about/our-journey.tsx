"use client"

import { useEffect, useRef } from "react"

export default function OurJourney() {
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: "2013",
      title: "Foundation",
      description: "VSN Group officially established in Dubai with a vision to revolutionize distribution",
    },
    {
      year: "2015",
      title: "First Expansion",
      description: "Opened distribution center in Lagos, Nigeria - gateway to West Africa",
    },
    {
      year: "2017",
      title: "Brand Partnerships",
      description: "Secured official distributorship for premium global electronics brands",
    },
    {
      year: "2020",
      title: "Market Leadership",
      description: "Recognized as top distributor in Middle East and Africa regions",
    },
    {
      year: "2023",
      title: "CIS Expansion",
      description: "Extended operations across CIS region with dedicated supply chain",
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description: "Launched digital transformation initiatives and AI-powered logistics",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-4">Our Evolution</p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">The VSN Journey</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            From a bold startup vision to industry leadership - here are the milestones that shaped VSN Group.
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el
              }}
              className="group flex gap-8 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8"
              style={{
                transitionDuration: `${300 + index * 50}ms`,
              }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {index + 1}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-8">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <span className="text-3xl font-black text-cyan-600">{milestone.year}</span>
                  <h3 className="text-2xl font-bold text-slate-900">{milestone.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-light text-lg max-w-2xl">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

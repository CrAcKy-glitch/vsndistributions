"use client"

import { useEffect, useRef } from "react"

export default function GlobalImpact() {
  const cardsRef = useRef<HTMLDivElement[]>([])

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const regions = [
    {
      region: "Middle East",
      description: "Headquartered in Dubai with operations across the GCC region",
      stats: "5 countries, 500+ partners",
    },
    {
      region: "Africa",
      description: "Strong presence in West Africa with distribution hub in Lagos, Nigeria",
      stats: "12 countries, 200+ retailers",
    },
    {
      region: "CIS Region",
      description: "Deep market expertise spanning former Soviet republics and emerging economies",
      stats: "15 countries, 300+ partners",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-4">Global Presence</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Our Worldwide Footprint</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Operating across 50+ countries with strategic hubs in key markets, we're positioned to serve you wherever
            you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group relative p-10 rounded-2xl border border-slate-700 hover:border-cyan-400 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 overflow-hidden"
              style={{
                transitionDuration: `${300 + index * 100}ms`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.region}
                </h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6">{item.description}</p>
                <div className="pt-6 border-t border-slate-700">
                  <p className="text-cyan-400 font-semibold text-sm">{item.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map representation */}
        <div className="mt-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-12 text-center">
          <p className="text-slate-400 mb-4">Connecting Continents</p>
          <div className="flex justify-center items-center gap-8 text-5xl">
            <span className="hover:scale-110 transition-transform cursor-pointer">🌍</span>
            <span className="text-slate-600">↔</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🌏</span>
            <span className="text-slate-600">↔</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🌎</span>
          </div>
          <p className="text-slate-400 mt-6">
            From Middle East hubs to African markets, serving the CIS region with excellence
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"

export default function CoreValues() {
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

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description:
        "We pursue perfection in every transaction, relationship, and decision. Our commitment to quality is unwavering.",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description:
        "Transparency and honesty form the foundation of every business relationship. We do what we promise.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We embrace cutting-edge technology and evolving market dynamics to stay ahead of the curve.",
    },
    {
      icon: "🌍",
      title: "Global Mindset",
      description:
        "Thinking locally, acting globally. We understand diverse markets and serve with cultural sensitivity.",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-4">What Drives Us</p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            These four principles guide every decision, partnership, and action we take as an organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-cyan-300 shadow-sm hover:shadow-xl transition-all duration-300 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 cursor-pointer"
              style={{
                transitionDuration: `${300 + index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

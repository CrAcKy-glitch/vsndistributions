"use client"

import { useEffect, useRef } from "react"

export default function CompanyStory() {
  const contentRef = useRef<HTMLDivElement>(null)
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

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-sm font-semibold text-cyan-600 tracking-widest uppercase">Founded 2013</p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Building Trust, <span className="text-cyan-600">One Partnership</span> at a Time
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              Founded in 2013, VSN Group emerged from a vision to revolutionize electronics distribution across emerging
              markets. What started as a bold idea in Dubai has grown into a formidable force connecting premium brands
              with retailers and distributors across three continents.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              With a combined team expertise exceeding 70+ years in the industry, we've built an unshakeable reputation
              for reliability, innovation, and customer-first solutions. Our leaders have previously stewarded
              operations at global giants like Samsung, LG, and Carrier.
            </p>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div
              ref={(el) => {
                if (el) cardsRef.current[0] = el
              }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 hover:shadow-lg transition-all duration-300"
              style={{ transitionDuration: "300ms" }}
            >
              <div className="text-4xl font-black text-cyan-600 mb-2">12+</div>
              <p className="text-sm font-semibold text-slate-900">Years of Excellence</p>
              <p className="text-xs text-slate-600 mt-2">Serving markets globally</p>
            </div>

            <div
              ref={(el) => {
                if (el) cardsRef.current[1] = el
              }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 hover:shadow-lg transition-all duration-300"
              style={{ transitionDuration: "400ms" }}
            >
              <div className="text-4xl font-black text-cyan-600 mb-2">50+</div>
              <p className="text-sm font-semibold text-slate-900">Countries Reached</p>
              <p className="text-xs text-slate-600 mt-2">Across 3 continents</p>
            </div>

            <div
              ref={(el) => {
                if (el) cardsRef.current[2] = el
              }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 hover:shadow-lg transition-all duration-300"
              style={{ transitionDuration: "500ms" }}
            >
              <div className="text-4xl font-black text-cyan-600 mb-2">10+</div>
              <p className="text-sm font-semibold text-slate-900">Premium Brands</p>
              <p className="text-xs text-slate-600 mt-2">Exclusive partnerships</p>
            </div>

            <div
              ref={(el) => {
                if (el) cardsRef.current[3] = el
              }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 hover:shadow-lg transition-all duration-300"
              style={{ transitionDuration: "600ms" }}
            >
              <div className="text-4xl font-black text-cyan-600 mb-2">$2B+</div>
              <p className="text-sm font-semibold text-slate-900">Annual Distribution</p>
              <p className="text-xs text-slate-600 mt-2">Value in motion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

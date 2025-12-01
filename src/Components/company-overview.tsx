"use client";

import { globeConfig, sampleArcs } from "@/misc/globeData";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

export default function CompanyOverview() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const World = dynamic(() => import("./globe").then((m) => m.World), {
    ssr: false,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const overviewItems = [
    {
      title: "Our Presence",
      description:
        "Strategic operations across the Middle East, Africa, and CIS regions with head office in Dubai and associate offices in Lagos, Nigeria.",
      icon: "🌍",
    },
    {
      title: "What We Do",
      description:
        "Leading distributor of consumer electronics, home appliances, and commercial audio/visual solutions from world-class brands.",
      icon: "📦",
    },
    {
      title: "Our Promise",
      description:
        "Delivering high-quality, tailored solutions that meet unique customer needs with integrity, collaboration, and excellence in every interaction.",
      icon: "✨",
    },
  ];

  return (
    <section
      id="company-overview"
      className="w-full py-20 md:py-32 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-cyan-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-semibold text-cyan-600 mb-2 tracking-wide uppercase">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            VSN Group of Companies
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            {
              "Founded in 2013, we've grown into a trusted force in electronics and home appliances distribution, setting industry standards across emerging markets."
            }
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {overviewItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 shadow-md hover:shadow-xl transition-all duration-300 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8"
              style={{
                transitionDuration: `${300 + index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

  const aboutItems = [
    {
      title: "Industry Leadership",
      text: "With over a decade of expertise, we've established ourselves as a trusted force in electronics distribution, serving thousands of clients across emerging markets.",
      image: "/modern-office-building-professional.jpg",
      href: "/about",
    },
    {
      title: "Innovation Driven",
      text: "We leverage cutting-edge supply chain technology and market intelligence to deliver solutions that exceed expectations and drive growth.",
      image: "/technology-innovation-circuit-board.jpg",
      href: "/about",
    },
    {
      title: "Global Excellence",
      text: "Operating across the Middle East, Africa, and CIS regions, we set industry benchmarks through unwavering commitment to quality and service.",
      image: "/global-business-network-world-map.jpg",
      href: "/about",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-semibold text-cyan-500 mb-2 tracking-wide">
            ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About VSN Group
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Industry leadership through excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group bg-white border border-slate-200 rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-cyan-300 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8"
              style={{
                transitionDuration: `${300 + index * 100}ms`,
              }}
            >
              <div className="h-48 bg-slate-200 overflow-hidden border-b-2 border-cyan-500 group-hover:border-cyan-600 transition-colors">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  {item.text}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 cursor-pointer transition-colors inline-flex items-center group/link"
                  >
                    Learn More
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

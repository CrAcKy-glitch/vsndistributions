"use client";

import { useEffect, useRef } from "react";

export default function Stats() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const countersRef = useRef<HTMLDivElement[]>([]);
  const animateCounter = (element: HTMLDivElement) => {
    const target = Number.parseInt(
      element.textContent?.replace(/\D/g, "") || "0"
    );
    const suffix = element.textContent?.replace(/\d/g, "") || "";
    let current = 0;
    const increment = Math.ceil(target / 50);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = current + suffix;
      }
    }, 30);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counterElement =
              countersRef.current[
                cardsRef.current.indexOf(entry.target as HTMLDivElement)
              ];
            if (counterElement) {
              animateCounter(counterElement);
            }
            entry.target.classList.add("animate-in");
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

  const stats = [
    {
      label: "Years of Excellence",
      value: "12+",
      description: "Trusted experience in market leadership",
    },
    {
      label: "Global Markets",
      value: "50+",
      description: "Operating across multiple regions",
    },
    {
      label: "Partnership Network",
      value: "26K+",
      description: "Strong relationships with top brands",
    },
    {
      label: "Quality Assurance",
      value: "100%",
      description: "Committed to industry standards",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-semibold text-cyan-400 mb-2 tracking-wide">
            METRICS & MILESTONES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Demonstrating our impact and commitment to excellence across global
            operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 hover:shadow-xl hover:shadow-cyan-500/10"
              style={{
                transitionDuration: `${300 + index * 100}ms`,
              }}
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-24 transition-all duration-300" />

              <div className="mt-8">
                <h3
                  ref={(el) => {
                    if (el) countersRef.current[index] = el;
                  }}
                  className="text-5xl md:text-6xl font-bold text-white mb-3 font-mono tracking-tight"
                >
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  {stat.label}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

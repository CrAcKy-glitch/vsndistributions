import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Counter animation
      const valueElement = card.querySelector("[data-target]");
      if (valueElement) {
        gsap.from(valueElement, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          duration: 2,
          innerText: 0,
          snap: { innerText: 1 },
          ease: "power3.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    { label: "Years in Business", value: "12", icon: "📅" },
    { label: "Global Presence", value: "50+", icon: "🌍" },
    { label: "Trusted Partners", value: "26,000+", icon: "🤝" },
    { label: "Industry Excellence", value: "100%", icon: "⭐" },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-2"
                data-target={stat.value}
              >
                {stat.value}
              </h3>
              <p className="text-slate-600 font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

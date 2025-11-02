import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const aboutItems = [
    {
      title: "Founded in 2013",
      text: "Rapidly grown into a trusted name in the electronics and home appliances industry with sharp focus on innovation and excellence.",
      icon: "🚀",
    },
    {
      title: "Innovation First",
      text: "Transforming supply chain and expanding market footprints across Middle East, Africa, and CIS regions with cutting-edge solutions.",
      icon: "💡",
    },
    {
      title: "Setting Standards",
      text: "Meeting and exceeding industry benchmarks by connecting customers with world-class products and cutting-edge technology.",
      icon: "⭐",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About VSN Group
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Transforming the Industry
          </p>
        </div>

        {/* About Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-blue-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-700 leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

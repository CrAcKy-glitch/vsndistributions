import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 50%',
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const leaders:any = [
    {
      name: 'SUJAY KUMAR',
      role: 'Founder & Director',
      bio: '30+ years of industry expertise leading global giants like LG, Samsung, and Carrier.',
      highlight: 'Former Director of Samsung West Africa',
    },
    {
      name: 'SUNIL KUMAR',
      role: 'Co-Founder & Director',
      bio: '18+ years in Dubai's competitive re-export arena with deep CIS market expertise.',
      highlight: 'Positioned VSN as industry leader',
    },
    {
      name: 'ELSHAD ALIZADA',
      role: 'Co-Founder & Director',
      bio: '25+ years of market insight since 1998 with Al-Futtaim Electronics.',
      highlight: 'Driving growth and market expansion',
    },
  ];

  return (
    <section id="leadership" ref={sectionRef} className="w-full py-20 md:py-32 px-6 md:px-12 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Leadership Team</h2>
          <p className="text-lg text-slate-600 font-light">Visionary Leaders Driving Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-blue-700 font-semibold italic">{leader.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
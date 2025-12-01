"use client";

import { useEffect, useRef } from "react";

export default function LeadershipTeam() {
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

  const leaders = [
    {
      name: "Sujay Kumar",
      role: "Founder & Director",
      experience: "30+ Years",
      bio: "Industry veteran with executive roles at Samsung, LG, and Carrier across Asia and Africa",
    },
    {
      name: "Sunil Kumar",
      role: "Co-Founder & Director",
      experience: "18+ Years",
      bio: "Re-export market specialist with deep expertise in Dubai's competitive distribution landscape",
    },
    {
      name: "Elshad Alizada",
      role: "Co-Founder & Director",
      experience: "25+ Years",
      bio: "Market pioneer since 1998 with Al-Futtaim Electronics, driving regional expansion",
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-4">
            Team
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Visionary Leadership
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our leadership team combines decades of industry expertise, global
            perspective, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8"
              style={{
                transitionDuration: `${300 + index * 100}ms`,
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-cyan-300">
                {/* Avatar placeholder */}
                <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-cyan-100 group-hover:to-blue-100 transition-all duration-300">
                  <div className="text-6xl">👤</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-cyan-600 font-semibold mb-4">
                    {leader.role}
                  </p>
                  <p className="text-sm text-slate-500 font-semibold mb-4 tracking-wide">
                    {leader.experience} Experience
                  </p>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

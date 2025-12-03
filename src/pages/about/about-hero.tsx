"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsCardsRef = useRef<HTMLDivElement[]>([]);
  const timelineRef = useRef<HTMLDivElement[]>([]);
  const valuesRef = useRef<HTMLDivElement[]>([]);

  const [scrollY, setScrollY] = useState(0);
  const parallaxOffset = scrollY * 0.3;

  useEffect(() => {
    // Animate stats cards
    statsCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: index * 0.1,
      });
    });

    // Animate timeline
    timelineRef.current.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          end: "top 50%",
        },
        duration: 0.8,
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        ease: "power3.out",
      });
    });

    // Animate values
    valuesRef.current.forEach((value, index) => {
      gsap.from(value, {
        scrollTrigger: {
          trigger: value,
          start: "top 75%",
          end: "top 50%",
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: index * 0.15,
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/global-business-network.jpg')",
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/60" />

      {/* Animated accent */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-8">
          <p className="text-xs md:text-sm font-semibold text-cyan-400 mb-4 md:mb-6 tracking-widest uppercase">
            Our Story
          </p>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tighter"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Transforming Global Distribution
        </h1>

        <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Building supply chain excellence across three continents through
          innovation, integrity, and unwavering commitment to our partners.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 text-base md:text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}

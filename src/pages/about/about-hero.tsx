"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (titleRef.current) titleRef.current.classList.add("animate-in");
    if (subtitleRef.current) subtitleRef.current.classList.add("animate-in");
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(6, 182, 212, 0.15) 100%)",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8 text-white"
          style={{
            transitionDuration: "900ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Story
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-8"
          style={{
            transitionDelay: "100ms",
            transitionDuration: "900ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          From humble beginnings to global leadership in electronics
          distribution. Discover how VSN Group transformed the supply chain
          across three continents.
        </p>

        {/* Scroll indicator */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

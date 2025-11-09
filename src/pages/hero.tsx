"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (headline) headline.classList.add("animate-in");
    if (subtitle) subtitle.classList.add("animate-in");
    if (cta) cta.classList.add("animate-in");
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dubai-cityscape-night-lights.jpg')",
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}
      />

      {/* Sophisticated dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-950/45" />

      {/* Premium neon light effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center">
            {/* Pre-headline */}
            <p className="text-xs md:text-sm font-semibold text-cyan-400 mb-4 md:mb-6 tracking-widest uppercase">
              Global Distribution Excellence
            </p>

            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 md:mb-8 tracking-tighter opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-4 break-words"
              style={{
                transitionDuration: "900ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0099cc 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 20px 40px rgba(0, 212, 255, 0.3)",
              }}
            >
              Where the World Does Business
            </h1>

            <p
              ref={subtitleRef}
              className="text-base md:text-lg lg:text-xl text-gray-100 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 translate-y-4"
              style={{
                transitionDelay: "100ms",
                transitionDuration: "900ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              Connecting 50+ countries with premium electronics and home
              appliances through cutting-edge distribution networks across the
              Middle East, Africa, and CIS regions.
            </p>

            <button
              ref={ctaRef}
              className="w-fit px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-600 hover:via-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 opacity-0 [&.animate-in]:opacity-100 [&.animate-in]:scale-100 scale-95 group text-base md:text-lg"
              style={{
                transitionDelay: "200ms",
                transitionDuration: "900ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
              }}
            >
              Explore Solutions
              <svg
                className="inline-block w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center lg:justify-end">
            <div className="space-y-6 w-full max-w-sm">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 md:mb-3">
                    50+
                  </div>
                  <div className="text-gray-200 font-semibold text-sm md:text-base tracking-wide">
                    Countries Served
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-2">
                    Spanning 3 continents
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 md:mb-3">
                    $2B+
                  </div>
                  <div className="text-gray-200 font-semibold text-sm md:text-base tracking-wide">
                    Distribution Value
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-2">
                    Annual movement
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 md:mb-3">
                    500+
                  </div>
                  <div className="text-gray-200 font-semibold text-sm md:text-base tracking-wide">
                    Premium Partners
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-2">
                    Global network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-cyan-300 uppercase tracking-widest font-semibold">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

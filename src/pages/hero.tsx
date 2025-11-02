import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Handle parallax on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hero text reveal animation (DMCC style)
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (!headline || !subtitle || !cta) return;

    // Split headline into words
    const words = headline.innerText.split(" ");
    headline.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
      )
      .join(" ");

    const wordSpans = headline.querySelectorAll("span span");

    const tl = gsap.timeline();

    // Animate each word with clip-path reveal
    wordSpans.forEach((span, index) => {
      tl.from(
        span,
        {
          duration: 0.7,
          opacity: 0,
          y: 30,
          ease: "cubic-bezier(0.83, 0, 0.17, 1)",
        },
        index * 0.15
      );
    });

    // Animate subtitle
    tl.from(
      subtitle,
      {
        duration: 0.8,
        opacity: 0,
        y: 20,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Animate CTA button
    tl.from(
      cta,
      {
        duration: 0.6,
        opacity: 0,
        scale: 0.95,
        ease: "back.out",
      },
      "-=0.4"
    );
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#0066cc] animate-gradient"
        style={{
          backgroundSize: "200% 200%",
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      {/* Scroll Parallax Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 md:px-12">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          VSN Group of Companies
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-100 mb-8 font-light tracking-wide"
        >
          Trusted Electronics & Home Appliances Distributor
        </p>

        <p className="text-base md:text-lg text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Transforming supply chains and expanding market footprints across the
          Middle East, Africa, and CIS regions with cutting-edge technology and
          world-class products.
        </p>

        <button
          ref={ctaRef}
          className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
        >
          Get in Touch
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <svg
          className="w-6 h-6 text-white animate-bounce"
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

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}

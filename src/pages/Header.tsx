"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "Home" },
    {
      label: "Brands",
      id: "about",
      nested: [
        {
          label: "Trading",
          id: "trading",
          nested: [
            { label: "LG", id: "about" },
            { label: "Samsung", id: "about" },
            { label: "SEB", id: "about" },
            { label: "Haier", id: "about" },
          ],
        },
        {
          label: "Distribution",
          id: "trading",
          nested: [
            { label: "LG", id: "about" },
            { label: "Samsung", id: "about" },
            { label: "SEB", id: "about" },
            { label: "Haier", id: "about" },
          ],
        },
      ],
    },
    { label: "Overseas", id: "about" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-3 left-0 right-0 z-50 w-[95%] h-20 mx-auto transition-all duration-300 bg-white backdrop-blur-sm rounded-r-full rounded-l-full"
    >
      {/* Top utility bar */}
      <div className=" my-auto -mt-4">
        <div className="px-6 md:px-0 py-6 ">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl bg-white rounded-lg h-16 mt-1  md:text-2xl font-bold text-slate-900 hover:text-cyan-600 transition"
            >
              <Image
                src="/VSN-logo.png"
                alt="VSN Group Logo"
                width={80}
                height={50}
                className=" -mt-3"
              />
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-black hover:text-cyan-400 transition font-medium text-sm tracking-wide hover:bg-slate-800/50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            {/* Right Section - CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* CTA Button */}
              <button className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md transition-all duration-300 text-sm whitespace-nowrap">
                Contact Us
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-slate-800/95 border-t border-slate-700/50 px-6 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-slate-300 hover:text-cyan-400 transition p-3 rounded-md hover:bg-slate-700/50 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full mt-4 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md transition-all duration-300">
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

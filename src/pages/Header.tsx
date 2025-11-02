import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isOpen, setIsOpen] = useState(false); // ✅ CORRECT

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        header.classList.add("backdrop-blur-md");
        header.classList.add("bg-white/10");
        header.classList.add("border-b");
        header.classList.add("border-white/10");
      } else {
        header.classList.remove("backdrop-blur-md");
        header.classList.remove("bg-white/10");
        header.classList.remove("border-b");
        header.classList.remove("border-white/10");
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Leadership", id: "leadership" },
    { label: "Presence", id: "presence" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-4 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl md:text-2xl font-bold text-white hover:text-blue-200 transition"
        >
          VSN GROUP
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-blue-200 transition font-medium text-sm tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-white hover:text-blue-200 transition p-2 rounded"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

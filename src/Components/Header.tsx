"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface NavItem {
  label: string;
  id: string;
  href?: string;
  nested?: NavItem[];
}

export default function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const navItems: NavItem[] = [
    { label: "Home", id: "hero", href: "/" },
    {
      label: "Brands",
      id: "about",
      nested: [
        {
          label: "Trading",
          id: "trading",
          nested: [
            { label: "LG", id: "lg" },
            { label: "Samsung", id: "samsung" },
            { label: "SEB", id: "seb" },
            { label: "Haier", id: "haier" },
          ],
        },
        {
          label: "Distribution",
          id: "distribution",
          nested: [
            { label: "Sony", id: "Sony" },
            { label: "Philips", id: "Philips" },
            { label: "Band D", id: "band-d" },
          ],
        },
      ],
    },
    {
      label: "Overseas",
      id: "about",
      nested: [
        { label: "Nigeria", id: "nigeria", href: "https://naija-home.com" },
        { label: "Azerbaijan", id: "azerbaijan", href: "" },
      ],
    },
    {
      label: "About",
      id: "about-main",
      href: "/about",
      nested: [
        { label: "Company", id: "about-company", href: "/about#company" },
        { label: "Vision", id: "about-vision", href: "/about#vision" },
        { label: "Mission", id: "about-mission", href: "/about#mission" },
        { label: "Leadership", id: "leadership", href: "/about#leadership" },
      ],
    },
  ];

  const brandLogos: Record<
    string,
    { name: string; logo: string; url: string }
  > = {
    lg: {
      name: "LG",
      logo: "/lg-electronics-logo.png",
      url: "https://www.lg.com",
    },
    samsung: {
      name: "Samsung",
      logo: "/samsung-logo.png",
      url: "https://www.samsung.com",
    },
    seb: {
      name: "SEB",
      logo: "/seb-logo.png",
      url: "https://www.seb.com",
    },
    haier: {
      name: "Haier",
      logo: "/haier-logo.png",
      url: "https://www.haier.com",
    },
    nigeria: {
      name: "Nigeria",
      logo: "/nigeria.avif",
      url: "",
    },
    azerbaijan: {
      name: "Azerbaijan",
      logo: "/azerbaijan.svg",
      url: "#",
    },
    Sony: {
      name: "Sony",
      logo: "/sony-logo.png",
      url: "https://www.sony.com",
    },
    Philips: {
      name: "Philips",
      logo: "/philips-logo.png",
      url: "https://www.philips.com",
    },
    "band-d": {
      name: "Band D",
      logo: "/bandd-logo.png",
      url: "https://www.bandd.com",
    },
  };

  const NestedDropdown = ({
    items,
    parentId,
  }: {
    items: NavItem[];
    parentId: string;
  }) => {
    return (
      <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
        {items.map((item) => {
          const hasTradingBrands =
            (item.label === "Trading" || item.label === "Distribution") &&
            item.nested?.some((i) =>
              [
                "LG",
                "Samsung",
                "SEB",
                "Haier",
                "Sony",
                "Nigeria",
                "Azerbaijan",
              ].includes(i.label)
            );

          return (
            <div key={item.id} className="relative group/sub">
              {hasTradingBrands ? (
                <button className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-cyan-600 transition flex items-center justify-between font-medium text-sm">
                  {item.label}
                  <span className="ml-1">›</span>
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={() => {
                    scrollToSection(item.id);
                    setActiveDropdown(null);
                  }}
                >
                  <button className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-cyan-600 transition font-medium text-sm">
                    {item.label}
                  </button>
                </Link>
              )}

              {hasTradingBrands && (
                <div className="absolute left-full top-0 ml-0 w-56 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 py-3 px-4 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {item.nested?.map((brand) => (
                      <a
                        key={brand.id}
                        href={brandLogos[brand.id]?.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-slate-100 transition group/brand"
                      >
                        <img
                          src={brandLogos[brand.id]?.logo || "/placeholder.svg"}
                          alt={brand.label}
                          className="h-10 object-contain mb-2 group-hover/brand:scale-110 transition-transform"
                        />
                        <span className="text-xs font-semibold text-slate-700 text-center group-hover/brand:text-cyan-600">
                          {brand.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-3 left-0 right-0 z-50 w-[95%] h-20 mx-auto transition-all duration-300 bg-white backdrop-blur-sm rounded-r-full rounded-l-full shadow-lg"
    >
      <div className="my-auto -mt-4">
        <div className="px-6 md:px-0 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
            {/* Logo */}
            <button
              onClick={() => window.open("/", "_self")}
              className="text-xl bg-white rounded-lg h-16 mt-1 md:text-2xl font-bold text-slate-900 hover:text-cyan-600 transition flex-shrink-0"
            >
              <Image
                src="/VSN-logo.png"
                alt="VSN Group Logo"
                width={80}
                height={50}
                className="-mt-3"
              />
            </button>

            <nav className="hidden md:flex gap-1 flex-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.nested ? (
                    <>
                      <button
                        onClick={() => {
                          if (item?.href) window.open(item.href, "_self");
                        }}
                        className="px-4 py-2 text-black hover:text-cyan-400 transition font-medium text-sm tracking-wide hover:bg-slate-800/50 rounded-md flex items-center gap-1"
                      >
                        {item.label}
                        <span className="text-xs">▼</span>
                      </button>
                      <NestedDropdown items={item.nested} parentId={item.id} />
                    </>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="px-4 py-2 text-black hover:text-cyan-400 transition font-medium text-sm tracking-wide hover:bg-slate-800/50 rounded-md"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section - CTA */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => window.open("/contact", "_self")}
                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md transition-all duration-300 text-sm whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-900 p-2"
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

        {isOpen && (
          <nav className="md:hidden bg-white border-t border-slate-200 px-6 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.nested ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.id ? null : item.id
                          )
                        }
                        className="w-full text-left text-slate-700 hover:text-cyan-600 transition p-3 rounded-md hover:bg-slate-100 font-medium flex items-center justify-between"
                      >
                        {item.label}
                        <span
                          className={`transition-transform ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {/* Mobile nested items */}
                      {activeDropdown === item.id && (
                        <div className="pl-4 space-y-2 bg-slate-50 rounded-md">
                          {item.nested.map((subItem) => {
                            const hasImageSections =
                              subItem.label &&
                              subItem.nested?.some((i) =>
                                [
                                  "LG",
                                  "Samsung",
                                  "SEB",
                                  "Haier",
                                  "Sony",
                                ].includes(i.label)
                              );

                            return (
                              <div key={subItem.id}>
                                {hasImageSections ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        setActiveDropdown(
                                          activeDropdown === subItem.id
                                            ? null
                                            : subItem.id
                                        )
                                      }
                                      className="w-full text-left text-slate-600 hover:text-cyan-600 transition p-2 rounded text-sm font-medium flex items-center justify-between"
                                    >
                                      {subItem.label}
                                      <span
                                        className={`transition-transform ${
                                          activeDropdown === subItem.id
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      >
                                        ▼
                                      </span>
                                    </button>

                                    {/* Mobile brand logos grid */}
                                    {activeDropdown === subItem.id && (
                                      <div className="grid grid-cols-2 gap-2 p-2">
                                        {subItem.nested?.map((brand) => (
                                          <a
                                            key={brand.id}
                                            href={
                                              brandLogos[brand.id]?.url || "#"
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-center p-2 rounded hover:bg-white transition"
                                          >
                                            <img
                                              src={
                                                brandLogos[brand.id]?.logo ||
                                                "/placeholder.svg" ||
                                                "/placeholder.svg"
                                              }
                                              alt={brand.label}
                                              className="h-8 object-contain mb-1"
                                            />
                                            <span className="text-xs font-semibold text-slate-700 text-center hover:text-cyan-600">
                                              {brand.label}
                                            </span>
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <button
                                    onClick={() => {
                                      scrollToSection(subItem.id);
                                    }}
                                    className="w-full text-left text-slate-600 hover:text-cyan-600 transition p-2 rounded text-sm font-medium"
                                  >
                                    {subItem.label}
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left text-slate-700 hover:text-cyan-600 transition p-3 rounded-md hover:bg-slate-100 font-medium"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => window.open("/contact", "_self")}
                className="w-full mt-4 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";
import Hero from "../Components/hero";
import About from "@/Components/About";
import Stats from "../Components/Stats";
// import BusinessVerticals from "@/components/Sections/BusinessVerticals";
import Leadership from "./Leadership";
// import Presence from "@/components/Sections/Presence";

import Footer from "../Components/Footer";
import CompanyOverview from "../Components/company-overview";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="w-full">
      <Hero />
      <About />
      <CompanyOverview />
      <Stats />
    </main>
  );
}

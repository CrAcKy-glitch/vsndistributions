import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Hero from "./hero";
import About from "./About";
import Stats from "./Stats";
// import BusinessVerticals from "@/components/Sections/BusinessVerticals";
import Leadership from "./Leadership";
// import Presence from "@/components/Sections/Presence";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <Header />
      <Hero />
      <About />
      <Stats />
      {/* <VisionMissionValues />
      <BusinessVerticals />
      <Leadership />
      <Presence /> */}
      <Contact />
      <Footer />
    </main>
  );
}

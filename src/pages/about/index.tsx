"use client";

import { useEffect } from "react";

import AboutHero from "./about-hero";
import CompanyStory from "./company-story";
import CoreValues from "./core-values";
import GlobalImpact from "./global-impact";
import LeadershipTeam from "./leadership-team";
import OurJourney from "./our-journey";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <div id="#">
        <AboutHero />
      </div>
      <div id="company">
        <CompanyStory />
      </div>
      <div id="vision">
        <CoreValues />
      </div>
      <div id="mission">
        <GlobalImpact />
      </div>
      <div id="journey">
        <OurJourney />
      </div>
      <div id="leadership">
        <LeadershipTeam />
      </div>
    </main>
  );
}

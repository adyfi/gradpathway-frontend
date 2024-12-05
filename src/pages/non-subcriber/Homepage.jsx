import React from "react";
import { VideoDemoSection } from "../../components/VideoDemoSection";
import { TimelineSection } from "../../components/TimelineSection";
import { HomeAboutSection } from "../../components/HomeAboutSection";
import { HomeHero } from "../../components/HomeHero";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <HomeAboutSection />
      <VideoDemoSection />
      <TimelineSection />
    </>
  );
};

export default Homepage;

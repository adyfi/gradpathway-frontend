import React from "react";
import { VideoDemoSection } from "../../components/VideoDemoSection";
import { TimelineSection } from "../../components/TimelineSection";
import { HomeAboutSection } from "../../components/HomeAboutSection";
import { HomeHero } from "../../components/HomeHero";
import { HomeSection2 } from "../../components/HomeSection2";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <HomeSection2 />
      {/* <VideoDemoSection /> */}
      <TimelineSection />
      <HomeAboutSection />
    </>
  );
};

export default Homepage;

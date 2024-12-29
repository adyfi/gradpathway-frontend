import React, { useEffect } from "react";
import './_homepage.scss';
import TimelineSection from "./TimelineSection";
import { HomeWhyGPSection } from "../../../components/HomeWhyGPSection";
import HomeServices from "./HomeServices";
import HeroSection from "./heroSection";
import { HomeAboutSection } from "./HomeAboutSection";

const Homepage = () => {

  return (
    <>
      <HeroSection />
      <HomeServices />
      <TimelineSection />
      <HomeAboutSection />
      {/* <HomeWhyGPSection /> */}
    </>
  );
};

export default Homepage;

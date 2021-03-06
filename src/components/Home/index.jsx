import React from "react";
import { AnimatePresence } from "framer-motion";
import Slider from "./Slider/Slider";
import TopRatedSection from "./TopRatedSection/TopRatedSection";
import UpcomingSection from "./UpcomingSection/UpcomingSection";

function Home() {
  return (
    <>
      <AnimatePresence initial={false}>
        <Slider />
      </AnimatePresence>
      <TopRatedSection />
      <UpcomingSection />
    </>
  );
}

export default Home;

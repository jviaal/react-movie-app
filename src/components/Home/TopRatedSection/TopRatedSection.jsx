import React, { useContext } from "react";

import { Context } from "../../../Context";
import { Link } from "react-router-dom";

import TopRatedCard from "./TopRatedCard";

import { motion } from "framer-motion";

import {
  DefaultSection,
  HomeSectionTitle,
  FlexContainer,
} from "../../../styles/HomeStyles";

import { toFullWidth, fromLeft } from "../../../styles/Variants";

function TopRatedSection() {
  const { topMovies } = useContext(Context);
  return (
    <DefaultSection>
      <HomeSectionTitle>
        <motion.h2 animate="visible" initial="hidden" variants={fromLeft}>
          TOP RATED
        </motion.h2>
        <Link to="/top-rated">Browse All</Link>
      </HomeSectionTitle>
      <motion.hr variants={toFullWidth} animate="visible" initial="hidden" />
      <FlexContainer>
        <TopRatedCard movies={topMovies} />
      </FlexContainer>
    </DefaultSection>
  );
}

export default TopRatedSection;

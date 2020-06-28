import React, { useContext } from "react";

import { Context } from "../../../Context";
import { Link } from "react-router-dom";

import TopRatedCard from "./TopRatedCard";

import { motion } from "framer-motion";

import { Section, SectionTitle, GridContainer } from "../../../styles/Styles";
import { toFullWidth, fromLeft } from "../../../styles/Variants";

function TopRatedSection() {
  const { topMovies } = useContext(Context);
  return (
    <Section>
      <SectionTitle>
        <motion.h2 animate="visible" initial="hidden" variants={fromLeft}>
          TOP RATED
        </motion.h2>
        <Link to="/top-rated">Browse All</Link>
      </SectionTitle>
      <motion.hr variants={toFullWidth} animate="visible" initial="hidden" />
      <GridContainer>
        <TopRatedCard movies={topMovies} />
      </GridContainer>
    </Section>
  );
}

export default TopRatedSection;

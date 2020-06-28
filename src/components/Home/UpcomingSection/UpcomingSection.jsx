import React, { useContext } from "react";

import { Context } from "../../../Context";
import { Link } from "react-router-dom";

import UpcomingCard from "./UpcomingCard";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Section, SectionTitle, GridContainer } from "../../../styles/Styles";
import { toFullWidth, fromLeft } from "../../../styles/Variants";

const UpHomecomingSection = styled(Section)`
  background-color: #232323;
`;

function UpcomingSection() {
  const { upcomingMovies } = useContext(Context);
  return (
    <UpHomecomingSection>
      <SectionTitle>
        <motion.h2 animate="visible" initial="hidden" variants={fromLeft}>
          Upcoming Movies
        </motion.h2>
        <Link to="/upcoming">Browse All</Link>
      </SectionTitle>
      <motion.hr variants={toFullWidth} animate="visible" initial="hidden" />
      <GridContainer>
        <UpcomingCard movies={upcomingMovies} />
      </GridContainer>
    </UpHomecomingSection>
  );
}

export default UpcomingSection;

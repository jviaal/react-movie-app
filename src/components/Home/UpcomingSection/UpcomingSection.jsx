import React, { useContext } from "react";

import { Context } from "../../../Context";
import { Link } from "react-router-dom";

import UpcomingCard from "./UpcomingCard";

import { motion } from "framer-motion";
import styled from "styled-components";

import {
  DefaultSection,
  HomeSectionTitle,
  FlexContainer,
} from "../../../styles/HomeStyles";

import { toFullWidth, fromLeft } from "../../../styles/Variants";

const UpHomecomingSection = styled(DefaultSection)`
  background-color: #232323;
  /* @media (min-width: 600px) {
    padding: 1rem 7%;
  }
  @media (min-width: 800px) {
    padding: 1rem 10%;
  } */
  @media (min-width: 1280px) {
    .content {
      padding: 2rem 20%;
    }
  }
`;

function UpcomingSection() {
  const { upcomingMovies } = useContext(Context);
  return (
    <UpHomecomingSection>
      <HomeSectionTitle>
        <motion.h2 animate="visible" initial="hidden" variants={fromLeft}>
          Upcoming Movies
        </motion.h2>
        <Link to="#">Browse All</Link>
      </HomeSectionTitle>
      <motion.hr variants={toFullWidth} animate="visible" initial="hidden" />
      <FlexContainer>
        <UpcomingCard movies={upcomingMovies} />
      </FlexContainer>
    </UpHomecomingSection>
  );
}

export default UpcomingSection;

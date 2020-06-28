import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  width: 100%;
  padding: 2rem 25px;
  @media (min-width: 600px) {
    padding: 2rem 7%;
  }
  @media (min-width: 800px) {
    padding: 2rem 10%;
  }
  @media (min-width: 1280px) {
    padding: 2rem 20%;
  }
`;

export const SectionTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h2 {
    margin: 0.5rem 0;
  }
  a {
    color: #919191;
    font-size: 1rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 46%);
  grid-column-gap: 8%;
  grid-row-gap: 1.5rem;
  margin: 1.5rem 0;
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 21%);
    grid-column-gap: 5.4%;
  }
`;

export const MovieCardContainer = styled(motion.div)`
  width: 100%;
  h1 {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: #fff;
    letter-spacing: 0.5px;
  }
  h2 {
    font-size: 0.8rem;
    color: #8c8c8c;
  }
`;

export const MovieImageContainer = styled.figure`
  overflow: hidden;
  img {
    width: 100%;
    border: 3px solid #fff;
    border-radius: 5px;
  }
`;

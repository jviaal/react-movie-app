import styled from "styled-components";
import { motion } from "framer-motion";

export const TrSection = styled(motion.section)`
  width: 100%;
  padding: 0 25px;
  @media (min-width: 600px) {
    padding: 0 7%;
  }
  @media (min-width: 800px) {
    padding: 0 10%;
  }
  @media (min-width: 1280px) {
    padding: 2rem 20%;
  }
`;

export const TrFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`;

export const MovieCardContainer = styled(motion.div)`
  margin: 1.5rem 0;
  color: white;
  width: 45%;
  h1 {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #fff;
    letter-spacing: 0.5px;
  }
  h2 {
    font-size: 0.8rem;
    color: #8c8c8c;
  }
  @media (min-width: 700px) {
    width: 21%;
  }
`;

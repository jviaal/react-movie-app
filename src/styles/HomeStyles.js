import styled from "styled-components";
import { motion } from "framer-motion";

export const DefaultSection = styled(motion.section)`
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

export const HomeSectionTitle = styled(motion.div)`
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

export const FlexContainer = styled.div`
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
  /* @media (min-width: 1024px) {
    width: 18%;
  } */
`;

export const MovieImageContainer = styled(motion.div)`
  overflow: hidden;
  img {
    width: 100%;
    border: 5px solid #fff;
    border-radius: 5px;
  }
`;

export const DefaultFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 30%;
    display: flex;
    div {
      display: flex;
      justify-content: center;
      background-color: red;
      margin-left: 0.5rem;
    }
  }
`;

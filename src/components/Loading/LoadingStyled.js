import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingStyled = styled(motion.div)`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 1);
  .main-container {
    display: flex;
    padding: 1rem;
    background-color: #232323;
    flex-direction: column;
    border-radius: 10px;
    .circle-container {
      display: flex;
      justify-content: center;
      .circle {
        width: 10px;
        height: 10px;
        padding: 0.2rem;
        margin: 0.2rem;
        background-color: #fa1027;
        color: white;
        border-radius: 50%;
      }
    }
    .text-container {
      width: 100%;
      text-align: center;
      font-weight: 500;
      color: #fff;
      font-size: 1.2rem;
      letter-spacing: 2px;
    }
  }
`;

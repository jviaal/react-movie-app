import styled from "styled-components";
import { motion } from "framer-motion";

export const TrailerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

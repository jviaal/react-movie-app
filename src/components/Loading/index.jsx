import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const BoxStyled = styled(motion.div)`
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

const variant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const box = {
  visible: (x) => ({
    y: [0, -50],
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: [x],
      yoyo: "Infinity",
      ease: "circOut",
    },
  }),
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

const text = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      yoyo: "Infinity",
    },
  },
  hidden: {
    opacity: 0,
  },
};

function Loading() {
  let x = 0;
  return (
    <BoxStyled exit={{ opacity: 0 }} transition={{ duration: 1.5 }}>
      <motion.div className="main-container">
        <motion.div
          className="circle-container"
          variants={variant}
          animate="visible"
          initial="hidden"
        >
          <motion.div className="circle" custom={x} variants={box}></motion.div>
          <motion.div
            className="circle"
            custom={x + 0.3}
            variants={box}
          ></motion.div>
          <motion.div
            className="circle"
            custom={x + 0.6}
            variants={box}
          ></motion.div>
        </motion.div>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={text}
          className="text-container"
        >
          LOADING
        </motion.div>
      </motion.div>
    </BoxStyled>
  );
}

export default Loading;

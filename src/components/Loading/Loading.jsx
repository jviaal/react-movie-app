import React from "react";
import { motion } from "framer-motion";

import { LoadingStyled } from "./LoadingStyled";
import { loadvariant, box, text } from "../../styles/Variants";

function Loading() {
  let x = 0;
  return (
    <LoadingStyled exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <motion.div className="main-container">
        <motion.div
          className="circle-container"
          variants={loadvariant}
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
    </LoadingStyled>
  );
}

export default Loading;

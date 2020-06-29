import React from "react";
import { motion } from "framer-motion";
import { LoadMoreBtnStyled } from "./LoadMoreBtnStyled";

function LoadMoreButton({ func }) {
  return (
    <LoadMoreBtnStyled>
      <motion.button whileHover={{ scale: 1.1 }} onClick={() => func()}>
        Load More
      </motion.button>
    </LoadMoreBtnStyled>
  );
}

export default LoadMoreButton;

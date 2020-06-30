import { motion } from "framer-motion";
import styled from "styled-components";

export const MobNavbarStyled = styled(motion.nav)`
  width: 100%;
  background-color: #191919;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 80px;
  top: 0;
  z-index: 10;
  & > div {
    width: 100%;
    padding: 1rem 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    width: 100%;
    padding: 1rem 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      padding-left: 1rem;
      font-size: 1rem;
    }
    .search-icon {
      display: flex;
      align-items: center;
      color: black;
      background-color: #fa1027;
      padding: 0.5rem;
      height: 40px;
      border: none;
      outline: none;
      img {
        width: 100%;
      }
    }
  }
  .movie-link {
    a {
      color: #fff;
      transition: 0.5 ease;
      :hover {
        color: #8c8c8c;
      }
    }
  }
  @media (min-width: 800px) {
    display: none !important;
  }
`;

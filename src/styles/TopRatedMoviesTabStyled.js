import { motion } from "framer-motion";
import styled from "styled-components";
// const urlOrig = "https://image.tmdb.org/t/p/original";
// const urlSmall = "https://image.tmdb.org/t/p/w780";
// const urlMedium = "https://image.tmdb.org/t/p/w1280";

export const TopRatedMoviesTabStyled = styled(motion.div)`
  width: 100%;
  padding: 25px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h2 {
      margin: 1rem 0;
    }
    a {
      color: #919191;
      font-size: 1rem;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    .top-rated-container {
      margin: 1.5rem 0;
      color: white;
      width: 45%;
      a {
        .image-container {
          overflow: hidden;
          img {
            width: 100%;
            border: 5px solid #fff;
            border-radius: 5px;
          }
        }
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
      }
    }
  }
  @media (min-width: 600px) {
    padding: 0 7%;
  }
  @media (min-width: 700px) {
    padding: 0 7%;
    .content {
      .top-rated-container {
        width: 21%;
      }
    }
  }
  @media (min-width: 800px) {
    padding: 0 10%;
    /* .content {
      .top-rated-container {
        width: 21%;
      }
    } */
  }
`;

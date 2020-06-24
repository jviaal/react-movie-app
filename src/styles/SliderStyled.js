import styled from "styled-components";
import { motion } from "framer-motion";

// const smImgURL = "https://image.tmdb.org/t/p/w185";
const smImgURL = "https://image.tmdb.org/t/p/w780";

export const SliderStyled = styled(motion.section)`
  width: 100%;
  background-image: url(${smImgURL}${(props) => props.imgURL});
  background-position: center;
  background-size: cover;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 3;
    padding: 25px;
    & > div {
      width: 100%;
    }
    .img-container {
      img {
        margin-top: 0.5rem;
        width: 100%;
        border-radius: 5px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
      }
    }
    .details-container {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      .title-average-container {
        display: flex;
        padding: 0.5rem;
        margin-bottom: 1rem;
        align-items: center;
        background-color: #fa1027;
        font-weight: 700;
        border-radius: 5px;
        .average {
          background-color: #fff;
          color: #fa1027;
          padding: 0.3rem;
          font-size: 0.9rem;
          border-radius: 5px;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        }
        .title {
          width: 100%;
          text-align: center;
          margin-left: 1rem;
          font-size: 1rem;
          text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          h1 {
            a {
              color: #fff;
              font-size: 1.2rem;
            }
          }
        }
      }
      .overview {
        display: none;
        font-size: 0.75rem;
        margin-bottom: 1rem;
      }
    }
    .nav-buttons-container {
      & > button {
        width: 50%;
        padding: 0.5rem;
      }
      :first-child {
        background-color: yellow;
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .content {
      padding: 2rem 7%;
      flex-direction: row;
      position: relative;
      .img-container {
        cursor: pointer;
        width: 50%;
      }
      .details-container {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;
        .title-average-container {
          .title {
            cursor: pointer;
            text-align: left;
            margin-right: 1rem;
            h1 {
              a {
                font-size: 1.8rem;
              }
            }
          }
        }
        .overview {
          display: flex;
        }
        .nav-buttons-container {
          display: flex;
          & > button {
            width: 100%;
            margin-right: 0.5rem;
            padding: 0.25rem 0.75rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media (min-width: 800px) {
    .content {
      padding: 2rem 10%;
      .img-container {
        width: 40%;
      }
      .details-container {
        .title-average-container {
          h1 {
            a {
              font-size: 1.8rem;
            }
          }
        }
        .overview {
          font-size: 1.1rem;
          font-weight: 500;
        }
      }
    }
  }
`;

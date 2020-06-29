import styled from "styled-components";
import { Section } from "../../../styles/Styles";

const smImgURL = "https://image.tmdb.org/t/p/w500";
const medImgURL = "https://image.tmdb.org/t/p/w780";

export const SliderStyled = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgb(25, 25, 25)),
    url(${smImgURL}${(props) => props.imgURL});
  background-position: center;
  background-size: cover;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .img-container {
      img {
        width: 100%;
        border-radius: 5px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    }
    .details-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      .title-userscore-container {
        display: flex;
        padding: 0.5rem;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: center;
        background-color: #fa1027;
        font-weight: 700;
        border-radius: 5px;
        .user-score {
          background-color: #fff;
          color: #fa1027;
          padding: 0.3rem;
          font-size: 0.9rem;
          border-radius: 5px;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        }
        .title {
          text-align: center;
          margin-left: 1rem;
          font-size: 1rem;
          text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          cursor: pointer;
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
        font-weight: 400;
        margin-bottom: 1rem;
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
  }
  @media (min-width: 600px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgb(25, 25, 25)),
      url(${medImgURL}${(props) => props.imgURL});
    .content {
      flex-direction: row;
      .img-container {
        width: 50%;
        min-height: 250px;
      }
      .details-container {
        margin-top: 0;
        margin-left: 2rem;
        align-items: flex-start;
        .title-userscore-container {
          .title {
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
  @media (min-width: 1024px) {
    .content {
      .details-container {
        .overview {
          line-height: 1.5rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

import styled, { css } from "styled-components";

export const MovieDetailsStyled = styled.div`
  & > section {
    padding: 25px;
  }
  .main-section {
    padding: 0;
    .content {
      padding: 25px;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      flex-direction: column;
      .image-container {
        width: 100%;
        img {
          width: 100%;
          border-radius: 5px;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        }
      }
      .details-container {
        & > div {
          margin: 0.5rem 0;
        }
        .title,
        .genres,
        .crew {
          margin: 0;
        }

        .tagline {
          font-style: italic;
          color: #8c8c8c;
        }
        .overview,
        .release-date-duration,
        .genres,
        .crew {
          font-size: 0.8rem;
        }
        .trailer {
          margin-top: 1rem;
          button {
            font-weight: 600;
            background-color: #d6182b;
            color: #fff;
            letter-spacing: 3px;
            padding: 0.25rem 1rem;
            border: none;
            border-radius: 5px;
          }
        }
        .crew {
          padding: 0.5rem 0;
          display: flex;
          flex-direction: column;
          .crew-job {
            font-size: 0.9rem;
            color: #8c8c8c;
          }
        }
      }
    }
    ${(props) =>
      props.imgURL &&
      css`
        background-image: url(https://image.tmdb.org/t/p/w780${props.imgURL});
        background-position: center;
        background-size: cover;
      `}
  }
  .similar-movies-section {
    .cover {
      display: flex;
      overflow-x: scroll;
      width: 100%;
      background-color: #232323;
      padding: 1rem;
      &::-webkit-scrollbar {
        background-color: #8c8c8c;
        border: none;
        height: 7.5px;
        border-radius: 50px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #c32222;
        border-radius: 50px;
      }
      & > .similar-movie-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0.5rem;
        min-width: 200px;
        margin-right: 1rem;
        a {
          color: #fff;
          .image-container {
            width: 100%;
            overflow: hidden;
            img {
              border: 5px solid #fff;
              border-radius: 5px;
              width: 100%;
            }
          }
          h1 {
            margin-top: 0.5rem;
            font-size: 1rem;
          }
          h2 {
            font-size: 0.9rem;
            color: #8c8c8c;
          }
        }
      }
    }
  }
  .side-panel-section {
    background-color: #232323;
    .keywords {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      .keyword {
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.5rem;
        background-color: black;
        border-radius: 5px;
        a {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 600px) {
    & > section {
      padding: 2rem 7%;
    }
    .main-section {
      .content {
        padding: 2rem 7%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .image-container {
          width: 35%;
        }
        .details-container {
          width: 60%;
        }
      }
    }
  }
  @media (min-width: 800px) {
    & > section {
      padding: 2rem 10%;
    }
    .main-section {
      .content {
        padding: 2rem 10%;
        .details-container {
          .crew {
            flex-direction: row;
            .crew-container {
              width: 50%;
            }
          }
        }
      }
      ${(props) =>
        props.imgURL &&
        css`
          background-image: url(https://image.tmdb.org/t/p/w1280${props.imgURL});
        `}
    }
  }
  @media (min-width: 1024px) {
    .main-section {
      .content {
        .image-container {
          width: 35%;
        }
        .details-container {
          width: 60%;
          .overview,
          .release-date-duration {
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .main-section {
      .content {
        .image-container {
          width: 25%;
        }
        .details-container {
          width: 70%;
          .title {
            font-size: 1.5rem;
          }
          .overview,
          .release-date-duration,
          .genres,
          .crew {
            font-size: 1rem;
          }
        }
      }
      ${(props) =>
        props.imgURL &&
        css`
          background-image: url(https://image.tmdb.org/t/p/original${props.imgURL});
        `}
    }
  }
`;

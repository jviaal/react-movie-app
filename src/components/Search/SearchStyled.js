import styled from "styled-components";

export const SearchStyled = styled.div`
  padding: 2rem 25px;
  & > h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .load-button {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    button {
      padding: 0.4rem 1rem;
      font-weight: 500;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #10fa42;
      color: black;
    }
  }
  @media (min-width: 600px) {
    padding: 2rem 7%;
  }
  @media (min-width: 800px) {
    padding: 2rem 10%;
  }
  @media (min-width: 1280px) {
    padding: 2rem 20%;
  }
`;

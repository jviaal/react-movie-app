import styled from "styled-components";

export const SearchResultsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 46%);
  grid-column-gap: 8%;
  grid-row-gap: 1.5rem;
  margin-top: 2rem;
  .search-data-container {
    a {
      color: #fff;
    }
    .image-container {
      overflow: hidden;
      width: 100%;
      img {
        border: 5px solid #fff;
        border-radius: 5px;
        width: 100%;
      }
    }
    h1 {
      font-size: 1rem;
    }
    h2 {
      font-size: 0.9rem;
      color: #8c8c8c;
    }
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 30%);
    grid-column-gap: 5%;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 21%);
    grid-column-gap: 5.4%;
  }
`;

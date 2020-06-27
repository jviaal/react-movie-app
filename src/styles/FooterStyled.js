import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  min-height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #919191;
  margin-top: 1rem;
  background-color: #191919;
  height: 50px;
  div {
    display: flex;
    align-items: center;
    h4 {
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
    .image-container {
      height: 30px;
      width: 50px;
      img {
        width: 100%;
      }
    }
  }
`;

import styled from "styled-components";

export const NavbarStyled = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #191919;
  align-items: center;
  color: white;
  padding: 0 25px;
  position: fixed;
  z-index: 11;
  overflow: hidden;
  top: 0;
  .logo {
    a {
      h1 {
        color: #fa1027;
        font-weight: 600;
        font-size: 1.3rem;
      }
    }
  }
  .search {
    display: none;
    input {
      height: 35px;
      border: none;
      outline: none;
      padding-left: 1rem;
      font-size: 0.9rem;
      border-radius: 50px;
      margin-right: -30px;
    }
    .search-icon {
      display: flex;
      align-items: center;
      background-color: #fa1027;
      padding: 0.1rem;
      height: 35px;
      border: none;
      border-radius: 50px;
      outline: none;
      img {
        height: 30px;
        width: 100%;
      }
    }
  }
  .links {
    a {
      color: #fff;
    }
    display: none;
  }
  .menu {
    margin-left: auto;
    height: 30px;
    width: 30px;
    color: #fff;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  @media (min-width: 600px) {
    padding: 0 7%;
  }
  @media (min-width: 800px) {
    padding: 0 10%;
    .menu {
      display: none;
    }
    .search,
    .links {
      display: flex;
    }
    .links {
      margin: 0 auto;
    }
    .links {
      & > .tv-show {
        margin-left: 1rem;
      }
    }
  }
`;

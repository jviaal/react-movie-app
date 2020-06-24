import React, { useContext } from "react";

import { Context } from "../Context";
import { withRouter, useHistory } from "react-router-dom";

import { NavbarStyled } from "../styles/NavbarStyled";

import MenuIcon from "../images/menu.svg";
import CloseIcon from "../images/close.svg";
import SearchIcon from "../images/search.svg";

function Navbar() {
  const { showNavbar, setShowNavbar, searchQuery, setSearchQuery } = useContext(
    Context
  );
  let history = useHistory();
  const handleSearch = async (e) => {
    e.preventDefault();
    setShowNavbar(false);
    setSearchQuery("");
    history.push(`/search/${searchQuery}`);
  };
  return (
    <NavbarStyled>
      <div className="logo">
        <a href="/">
          <h1>LOVE2WATCH</h1>
        </a>
      </div>
      <div className="links">
        <div>
          <a href="/">Movies</a>
        </div>
        <div className="tv-show">TV Shows</div>
      </div>
      <form className="search" onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          placeholder="Quick Search"
          name="query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-icon">
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </form>
      <div className="menu" onClick={() => setShowNavbar(!showNavbar)}>
        {showNavbar ? (
          <img src={CloseIcon} alt="close-icon" />
        ) : (
          <img src={MenuIcon} alt="menu-icon" />
        )}
      </div>
    </NavbarStyled>
  );
}

export default withRouter(Navbar);

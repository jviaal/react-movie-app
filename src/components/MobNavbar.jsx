import React, { useContext } from "react";

import { Context } from "../Context";
import { withRouter, useHistory } from "react-router-dom";

import { MobNavbarStyled } from "../styles/MobNavbarStyled";

import SearchIcon from "../images/search.svg";

const variant = {
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  hidden: {
    y: "-100vh",
    transition: {
      duration: 1,
    },
  },
};

function MobNavbar() {
  const { setShowNavbar, searchQuery, setSearchQuery } = useContext(Context);
  let history = useHistory();
  const handleSearch = async (e) => {
    e.preventDefault();
    setShowNavbar(false);
    setSearchQuery("");
    history.push(`/search/${e.target.elements.query.value}`);
  };
  return (
    <MobNavbarStyled
      variants={variant}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
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
      <div className="movie-link">
        <a href="/">Movies</a>
      </div>
      <div>TV Shows</div>
    </MobNavbarStyled>
  );
}

export default withRouter(MobNavbar);

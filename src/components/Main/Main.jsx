import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";

import Home from "../Home";
import Search from "../Search";
import Movie from "../Movie";
import TopRated from "../TopRated";
import Upcoming from "../Upcoming";
import Keyword from "../Keyword";

import { MainStyled } from "./MainStyled";

function Main() {
  let location = useLocation();
  return (
    <MainStyled>
      <Switch location={location} key={location.pathname} exit={{ opacity: 0 }}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:movieID">
          <Movie />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        <Route path="/top-rated/">
          <TopRated />
        </Route>
        <Route path="/upcoming/">
          <Upcoming />
        </Route>
        <Route path="/keyword/:keywordID">
          <Keyword />
        </Route>
      </Switch>
    </MainStyled>
  );
}

export default Main;

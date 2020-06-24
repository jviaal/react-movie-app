import React from "react";

import { Switch, Route } from "react-router-dom";

import Slider from "./Slider";
import TopRatedMoviesTab from "./TopRatedMoviesTab";
import Search from "./Search/";
import Movie from "./Movie/";

import { MainStyled } from "../styles/MainStyled";
import { AnimatePresence } from "framer-motion";

function Main() {
  return (
    <MainStyled>
      <Switch>
        <Route exact path="/">
          <AnimatePresence>
            <Slider />
          </AnimatePresence>
          <TopRatedMoviesTab />
        </Route>
        <Route path="/movie/:movieID">
          <Movie />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
      </Switch>
    </MainStyled>
  );
}

export default Main;

import React, { useState, useEffect } from "react";

import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar";
import MobNavbar from "./components/MobNavbar";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

import { Context } from "./Context";

import { GlobalStyle } from "./styles/GlobalStyle";
import "./styles/Font.css";
import { AnimatePresence } from "framer-motion";

const apiKey = "46653bc02c45b6381c995f1c7a8bbe09";
function App() {
  const [popularMovies, setPopularMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const popUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      const popRes = await fetch(popUrl);
      const popJsonData = await popRes.json();
      setPopularMovies(popJsonData.results);
      const topURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
      const topRes = await fetch(topURL);
      const topJsonData = await topRes.json();
      const topTemp = [];
      topJsonData.results.forEach((movie, index) => {
        if (index < 8) {
          topTemp.push(movie);
        } else {
        }
      });
      setTopMovies(topTemp);
      const upcomURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
      const upcomRes = await fetch(upcomURL);
      const upcomJsonData = await upcomRes.json();
      const upcomTemp = [];
      upcomJsonData.results.forEach((movie, index) => {
        if (index < 4) {
          upcomTemp.push(movie);
        } else {
        }
      });
      setUpcomingMovies(upcomTemp);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          popularMovies,
          setPopularMovies,
          topMovies,
          upcomingMovies,
          showNavbar,
          setShowNavbar,
          searchQuery,
          setSearchQuery,
        }}
      >
        <AnimatePresence initial={false}>
          {isLoading ? <Loading /> : null}
        </AnimatePresence>
        <Navbar />
        <AnimatePresence>{showNavbar && <MobNavbar />}</AnimatePresence>
        {upcomingMovies && <Main />}
        <Footer />
        <GlobalStyle />
      </Context.Provider>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./styles/Font.css";
import { Context } from "./Context";
import MobNavbar from "./components/MobNavbar";
import { AnimatePresence } from "framer-motion";

// const key = "46653bc02c45b6381c995f1c7a8bbe09";
// const imageURL = "https://image.tmdb.org/t/p/{poster_path}";
// const videoURL = "https://api.themoviedb.org/3/movie/{movieID}/videos?api_key=46653bc02c45b6381c995f1c7a8bbe09"
// const imagePath  "https://image.tmdb.org/t/p/{backdrop_path}";
// const videoPath = "https://www.youtube.com/watch?v={key}"
console.log(process.env.API_KEY);
const apiKey = "46653bc02c45b6381c995f1c7a8bbe09";
function App() {
  const [popularMovies, setPopularMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    let x = 0;
    const getData = async () => {
      const popUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      const popRes = await fetch(popUrl);
      const popJsonData = await popRes.json();
      setPopularMovies(popJsonData.results);
      const topURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
      const topRes = await fetch(topURL);
      const topJsonData = await topRes.json();
      // setTopMovies(topJsonData.results);
      const temp = [];
      topJsonData.results.forEach((movie) => {
        if (x < 4) {
          temp.push(movie);
        } else {
        }
        x++;
      });
      setTopMovies(temp);
    };
    getData();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          popularMovies,
          setPopularMovies,
          showNavbar,
          setShowNavbar,
          topMovies,
          setTopMovies,
          searchQuery,
          setSearchQuery,
        }}
      >
        <Navbar />
        <AnimatePresence>{showNavbar && <MobNavbar />}</AnimatePresence>
        {topMovies && <Main />}
        <Footer />
        <GlobalStyle />
      </Context.Provider>
    </>
  );
}

export default App;

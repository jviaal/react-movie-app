import React, { useContext } from "react";

import { Context } from "../Context";
import { Link } from "react-router-dom";

import { TopRatedMoviesTabStyled } from "../styles/TopRatedMoviesTabStyled";
import { motion } from "framer-motion";

const X = ({ movies }) => {
  const imagePath = "https://image.tmdb.org/t/p/w780";
  return (
    <>
      {movies.map((movie) => (
        <motion.div
          whileHover={{ scale: 1.025 }}
          key={movie.id}
          className="top-rated-container"
        >
          <Link to={`/movie/${movie.id}`}>
            <div className="image-container">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={imagePath + movie.poster_path}
                alt=""
              />
            </div>
            <h1> {movie.title}</h1>
            <h2>{movie.release_date.slice(0, 4)}</h2>
          </Link>
        </motion.div>
      ))}
    </>
  );
};

function TopRatedMoviesTab() {
  const { topMovies } = useContext(Context);
  return (
    <TopRatedMoviesTabStyled>
      <div>
        <motion.h2
          animate={{ x: 0 }}
          initial={{ x: "-100vw" }}
          transition={{ type: "tween", duration: 0.7 }}
        >
          TOP RATED
        </motion.h2>
        <Link to="#">Browse All</Link>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ type: "tween", duration: 1 }}
      />
      <div className="content">
        <X movies={topMovies} />
      </div>
      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ type: "tween", duration: 1 }}
      />
    </TopRatedMoviesTabStyled>
  );
}

export default TopRatedMoviesTab;

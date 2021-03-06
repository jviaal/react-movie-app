import React, { useContext, useState } from "react";

import { Context } from "../../../Context";
import { SliderStyled } from "./SliderStyled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Slider() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const imgPath = "https://image.tmdb.org/t/p/w500";
  const { popularMovies } = useContext(Context);
  const getNextMovieIndex = () => {
    if (currentMovieIndex === popularMovies.length - 1) {
      setCurrentMovieIndex(0);
    } else {
      setCurrentMovieIndex(currentMovieIndex + 1);
    }
  };
  const getPreviousMovieIndex = () => {
    if (currentMovieIndex === 0) {
      setCurrentMovieIndex(popularMovies.length - 1);
    } else {
      setCurrentMovieIndex(currentMovieIndex - 1);
    }
  };
  return (
    <SliderStyled imgURL={popularMovies[currentMovieIndex].backdrop_path}>
      <motion.div className="content">
        <motion.div className="img-container">
          <Link to={`/movie/${popularMovies[currentMovieIndex].id}`}>
            <motion.img
              key={currentMovieIndex}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              src={imgPath + popularMovies[currentMovieIndex].poster_path}
              alt={popularMovies[currentMovieIndex].title}
            />
          </Link>
        </motion.div>
        <motion.div
          className="details-container"
          src={imgPath + popularMovies[currentMovieIndex].poster_path}
          alt={popularMovies[currentMovieIndex].title}
        >
          <motion.div className="title-userscore-container">
            <div className="user-score">
              {popularMovies[currentMovieIndex].vote_average}
            </div>
            <div className="title">
              <h1>
                <Link to={`/movie/${popularMovies[currentMovieIndex].id}`}>
                  {popularMovies[currentMovieIndex].title}
                </Link>
              </h1>
            </div>
          </motion.div>
          <div className="overview">
            {popularMovies[currentMovieIndex].overview}
          </div>
          <div className="nav-buttons-container">
            <button onClick={() => getPreviousMovieIndex()}>Previous</button>
            <button onClick={() => getNextMovieIndex()}>Next</button>
          </div>
        </motion.div>
      </motion.div>
    </SliderStyled>
  );
}

export default Slider;

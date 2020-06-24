import React, { useContext, useState } from "react";

import { Context } from "../Context";
import { Link } from "react-router-dom";

import { SliderStyled } from "../styles/SliderStyled";
import { motion } from "framer-motion";

function Slider() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const imgPath = "https://image.tmdb.org/t/p/w780";
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
          <div>
            <h1>Popular Movies</h1>
          </div>
          <Link to={`/movie/${popularMovies[currentMovieIndex].id}`}>
            <motion.img
              key={currentMovieIndex}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              custom={{ currentMovieIndex }}
              src={imgPath + popularMovies[currentMovieIndex].poster_path}
              alt={popularMovies[currentMovieIndex].title}
            />
          </Link>
        </motion.div>
        <motion.div className="details-container">
          <div className="title-average-container">
            <div className="average">
              {popularMovies[currentMovieIndex].vote_average}
            </div>
            <div className="title">
              <h1>
                <Link to={`/movie/${popularMovies[currentMovieIndex].id}`}>
                  {popularMovies[currentMovieIndex].title}
                </Link>
              </h1>
            </div>
          </div>
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

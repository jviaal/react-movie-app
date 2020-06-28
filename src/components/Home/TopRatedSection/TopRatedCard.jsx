import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  MovieCardContainer,
  MovieImageContainer,
} from "../../../styles/Styles";

function TopRatedCard({ movies }) {
  const imagePath = "https://image.tmdb.org/t/p/w780";
  return (
    <>
      {movies.map((movie) => (
        <MovieCardContainer whileHover={{ scale: 1.025 }} key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MovieImageContainer className="image-container">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={imagePath + movie.poster_path}
                alt=""
              />
            </MovieImageContainer>
            <h1> {movie.title}</h1>
            <h2>{movie.release_date.slice(0, 4)}</h2>
          </Link>
        </MovieCardContainer>
      ))}
    </>
  );
}

export default TopRatedCard;

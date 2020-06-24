import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { SearchResultsStyled } from "./SearchResultsStyled";

function SearchResults({ searchData }) {
  const imagePath = "https://image.tmdb.org/t/p/w780";
  return (
    <SearchResultsStyled>
      {searchData.map(
        (movie) =>
          movie.poster_path && (
            <motion.div
              whileHover={{ scale: 1.025 }}
              key={movie.id}
              className="search-data-container"
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
                <h2>{movie.release_date}</h2>
              </Link>
            </motion.div>
          )
      )}
    </SearchResultsStyled>
  );
}

export default SearchResults;

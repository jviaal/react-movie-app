import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { TrSection, TrFlexContainer } from "./TopRatedStyled";
import {
  DefaultSection,
  DefaultFlexContainer,
  MovieCardContainer,
  MovieImageContainer,
} from "../../styles/HomeStyles";

function X({ movies }) {
  const imagePath = "https://image.tmdb.org/t/p/w780";
  return (
    <>
      {movies.map(
        (movie) =>
          movie.poster_path && (
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
          )
      )}
    </>
  );
}

function TopRated() {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const loadMore = async () => {
    let temp = [];
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&page=${
      currentPage + 1
    }`;
    const res = await fetch(url);
    const jsonData = await res.json();
    setCurrentPage(currentPage + 1);
    movies.forEach((data) => {
      temp.push(data);
    });
    jsonData.results.forEach((data) => {
      temp.push(data);
    });
    setMovies(temp);
  };

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&page=1";
      const res = await fetch(url);
      const jsonData = await res.json();
      setMovies(jsonData.results);
      setTotalPages(jsonData.total_pages);
    };
    getData();
  }, []);
  return (
    <>
      <TrSection>
        <TrFlexContainer>{movies && <X movies={movies} />}</TrFlexContainer>
        {movies && (
          <div className="load-button">
            {totalPages > currentPage ? (
              <button onClick={() => loadMore()}>Load More</button>
            ) : (
              <div>End of Results</div>
            )}
          </div>
        )}
      </TrSection>
    </>
  );
}

export default TopRated;

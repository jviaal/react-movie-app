import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MovieDetailsStyled } from "./MovieDetailsStyled";
import { motion } from "framer-motion";

function MovieDetails({ movie, crew }) {
  const imagePath = "https://image.tmdb.org/t/p/w780";
  const videoPath = "https://www.youtube.com/watch?v=";
  const [similarMovies, setSimilarMovies] = useState();

  const convertDuration = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    const getSimilarMovies = () => {
      let temp = [];
      movie.similar.results.forEach((x, index) => {
        if (index < 10) {
          temp.push(x);
        }
      });
      setSimilarMovies(temp);
    };
    getSimilarMovies();
  }, [movie]);

  return (
    <MovieDetailsStyled
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      imgURL={movie.backdrop_path}
    >
      <section className="main-section">
        <div className="content">
          <div className="image-container">
            <img src={imagePath + movie.poster_path} alt="" />
          </div>
          <div className="details-container">
            <div className="title">
              <h1>{movie.title}</h1>
            </div>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name}, </span>
              ))}
            </div>
            <div className="release-date-duration">
              <span>{movie.release_date} • </span>
              <span>{convertDuration(movie.runtime)}</span>
            </div>
            <div className="tagline">"{movie.tagline}"</div>
            <div>Users Score : {movie.vote_average}</div>
            <div className="overview">Overview : {movie.overview}</div>
            <div className="trailer">
              {movie.videos.results.length !== 0 ? (
                <a href={videoPath + movie.videos.results[0].key}>
                  <button>Trailer</button>
                </a>
              ) : (
                "No Trailer Link"
              )}
            </div>
            <div className="crew">
              {crew &&
                crew.map((person) => (
                  <div key={person.credit_id} className="crew-container">
                    <div className="crew-name">{person.name}</div>
                    <div className="crew-job">{person.job}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="similar-movies-section">
        <div>
          <h2>Similar Movies</h2>
        </div>
        <div className="cover">
          {similarMovies && (
            <>
              {similarMovies.length !== 0 ? (
                similarMovies.map((sMovie) => (
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    className="similar-movie-container"
                    key={sMovie.id}
                  >
                    <Link to={`/movie/${sMovie.id}`}>
                      <div className="image-container">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          src={imagePath + sMovie.poster_path}
                          alt=""
                        />
                      </div>
                      <h1>{sMovie.title}</h1>
                      <h2>{sMovie.release_date.slice(0, 4)}</h2>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div>----</div>
              )}
            </>
          )}
        </div>
      </section>
      <section className="side-panel-section">
        <div>Keywords (not yet working) </div>
        <div className="keywords">
          {movie.keywords.keywords.length !== 0 ? (
            movie.keywords.keywords.map((key) => (
              <div key={key.id} className="keyword">
                <Link to="#">{key.name}</Link>
              </div>
            ))
          ) : (
            <div>----</div>
          )}
        </div>
      </section>
    </MovieDetailsStyled>
  );
}

export default MovieDetails;

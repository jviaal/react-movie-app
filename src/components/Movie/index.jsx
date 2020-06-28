import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loading from "../Loading/Loading";
import MovieDetails from "./MovieDetails";

const apiKey = "46653bc02c45b6381c995f1c7a8bbe09";

function Movie() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState();
  const [crew, setCrew] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMovie = async () => {
      let temp = [];
      const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US&append_to_response=images,credits,videos,similar,keywords`;
      const res = await fetch(url);
      const jsonData = await res.json();
      jsonData.credits.crew.forEach((person, index) => {
        if (index < 2) {
          temp.push(person);
        }
      });
      setMovie(jsonData);
      setCrew(temp);
      setIsLoading(false);
    };
    getMovie();
  }, [movieID]);
  return (
    <>
      <AnimatePresence initial={false}>
        {isLoading ? <Loading /> : <MovieDetails movie={movie} crew={crew} />}
      </AnimatePresence>
    </>
  );
}

export default Movie;

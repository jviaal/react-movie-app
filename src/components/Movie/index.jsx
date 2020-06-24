import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const apiKey = "46653bc02c45b6381c995f1c7a8bbe09";

function Movie() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState();
  const [crew, setCrew] = useState();
  useEffect(() => {
    const getMovie = async () => {
      let temp = [];
      const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US&append_to_response=images,credits,videos,similar,keywords`;
      const res = await fetch(url);
      const jsonData = await res.json();
      console.log(jsonData);
      jsonData.credits.crew.forEach((person, index) => {
        if (index < 2) {
          temp.push(person);
        }
      });
      setMovie(jsonData);
      setCrew(temp);
    };
    getMovie();
  }, [movieID]);
  return <>{movie && <MovieDetails movie={movie} crew={crew} />}</>;
}

export default Movie;

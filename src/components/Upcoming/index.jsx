import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Section, GridContainer } from "../../styles/Styles";
import UpcomingCard from "./UpcomingCard";
import Loading from "../Loading/Loading";

function Upcoming() {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&page=${
      currentPage + 1
    }`;
    const res = await fetch(url);
    const jsonData = await res.json();
    setCurrentPage(currentPage + 1);
    let temp = [...movies];
    jsonData.results.forEach((data) => {
      if (data.poster_path !== null) {
        temp.push(data);
      }
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
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <>
      <AnimatePresence initial={false}>
        {isLoading ? (
          <Loading />
        ) : (
          <Section>
            <GridContainer>
              {movies && <UpcomingCard movies={movies} />}
            </GridContainer>
            {movies && (
              <div className="load-button">
                {totalPages > currentPage ? (
                  <button onClick={() => loadMore()}>Load More</button>
                ) : (
                  <div>End of Results</div>
                )}
              </div>
            )}
          </Section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Upcoming;

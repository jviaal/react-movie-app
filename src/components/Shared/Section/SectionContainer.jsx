import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import LoadMoreButton from "../LoadMore/LoadMore";
import SectionCard from "./SectionCard";
import Loading from "../../Loading/Loading";

import { Section, GridContainer } from "../../../styles/Styles";

function SectionContainer({ url }) {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = async () => {
    const dirURL = `${url}page=${currentPage + 1}`;
    const res = await fetch(dirURL);
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
      const dirURL = `${url}page=1`;
      const res = await fetch(dirURL);
      const jsonData = await res.json();
      setMovies(jsonData.results);
      setTotalPages(jsonData.total_pages);
      setIsLoading(false);
    };
    getData();
  }, [url]);

  return (
    <AnimatePresence initial={false}>
      {isLoading ? (
        <Loading />
      ) : (
        <Section>
          <GridContainer>
            {movies && <SectionCard movies={movies} />}
          </GridContainer>
          {movies && (
            <div className="load-button">
              {totalPages > currentPage ? (
                <LoadMoreButton func={loadMore} />
              ) : (
                <div>End of Results</div>
              )}
            </div>
          )}
        </Section>
      )}
    </AnimatePresence>
  );
}

export default SectionContainer;

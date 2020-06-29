import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { fromLeft, toFullWidth } from "../../styles/Variants";
import LoadMoreButton from "../Shared/LoadMore/LoadMore";

import { Section, SectionTitle, GridContainer } from "../../styles/Styles";
import Loading from "../Loading/Loading";
import SearchCard from "./SearchCard";

function Search() {
  let { query } = useParams();
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&query=${query}&page=${
      currentPage + 1
    }&include_adult=false`;
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
      const url = `https://api.themoviedb.org/3/search/movie?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&query=${query}&page=1&include_adult=false`;
      const res = await fetch(url);
      const jsonData = await res.json();
      let temp = [];
      jsonData.results.forEach((data) => {
        if (data.poster_path !== null) {
          temp.push(data);
        }
      });
      setMovies(temp);
      setTotalPages(jsonData.total_pages);
      setIsLoading(false);
    };
    getData();
  }, [query]);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <Loading />
        ) : (
          <Section>
            <SectionTitle>
              <motion.h2 animate="visible" initial="hidden" variants={fromLeft}>
                Search Results for "{query}"
              </motion.h2>
            </SectionTitle>
            <motion.hr
              variants={toFullWidth}
              animate="visible"
              initial="hidden"
            />
            <GridContainer>
              {movies && <SearchCard movies={movies} />}
            </GridContainer>
            {movies.length !== 0 ? (
              <>
                {totalPages > currentPage ? (
                  <LoadMoreButton func={loadMore} />
                ) : (
                  <div>End of Result</div>
                )}
              </>
            ) : (
              <div
                style={{
                  minHeight: "550px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                No search results for "{query}"
              </div>
            )}
          </Section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Search;

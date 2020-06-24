import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchResults from "./SearchResults";

import { SearchStyled } from "./SearchStyled";

function Search() {
  let { query } = useParams();
  const [searchData, setSearchData] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();

  const a = async () => {
    let temp = [];
    const url = `https://api.themoviedb.org/3/search/movie?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&query=${query}&page=${
      currentPage + 1
    }&include_adult=false`;
    const res = await fetch(url);
    const jsonData = await res.json();
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
    searchData.forEach((data) => {
      temp.push(data);
    });
    jsonData.results.forEach((data) => {
      temp.push(data);
    });
    setSearchData(temp);
  };

  useEffect(() => {
    setCurrentPage(1);
    const getSearchData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&query=${query}&page=1&include_adult=false`;
      const res = await fetch(url);
      const jsonData = await res.json();
      setSearchData(jsonData.results);
      setTotalPages(jsonData.total_pages);
    };
    getSearchData();
  }, [query]);

  return (
    <SearchStyled>
      <h1>Search results of "{`${query}`}"</h1>
      <hr />
      {searchData && <SearchResults searchData={searchData} />}
      {searchData && (
        <div className="load-button">
          {console.log(totalPages)}
          {totalPages > currentPage ? (
            <button onClick={() => a()}>Load More</button>
          ) : (
            <div>End of Results</div>
          )}
        </div>
      )}
    </SearchStyled>
  );
}

export default Search;

import React from "react";
import SectionContainer from "../Shared/Section/SectionContainer";
import { useParams } from "react-router-dom";

function Keyword() {
  let { keywordID } = useParams();
  return (
    <>
      <SectionContainer
        url={`https://api.themoviedb.org/3/discover/movie?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_keywords=${keywordID}&`}
      />
    </>
  );
}

export default Keyword;

import React from "react";
import SectionContainer from "../Shared/Section/SectionContainer";

function Upcoming() {
  return (
    <>
      <SectionContainer
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=46653bc02c45b6381c995f1c7a8bbe09&language=en-US&"
        }
      />
    </>
  );
}

export default Upcoming;

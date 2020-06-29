import React from "react";
import ReactPlayer from "react-player";
import Close from "../../images/close.svg";
import { TrailerStyled } from "./TrailerStyled";

function Trailer({ movie, videoPath, setShowTrailer }) {
  return (
    <TrailerStyled
      onClick={() => setShowTrailer(false)}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: "tween" },
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { type: "tween" } }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <div
          style={{ width: "100%", textAlign: "right", paddingBottom: "1rem" }}
          onClick={() => setShowTrailer(false)}
        >
          <img style={{ height: "20px" }} src={Close} alt="close-icon" />
        </div>
        <ReactPlayer
          width="100%"
          url={videoPath + movie.videos.results[0].key}
          controls={true}
        />
      </div>
    </TrailerStyled>
  );
}

export default Trailer;

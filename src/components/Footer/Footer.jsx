import React from "react";
import TMDBIcon from "../../images/tmdb.svg";

import { FooterStyled } from "../../styles/FooterStyled";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <h4>Powered by</h4>
        <div className="image-container">
          <img src={TMDBIcon} alt="TMDB-Icon" />
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;

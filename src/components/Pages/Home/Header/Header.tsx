import React from "react";

// Styles
import "./Header.scss";

// Components
import HeaderCarousel from "./HeaderCarousel";
import BdButton from "../../../Button/BdButton";

const Header = () => {
  return (
    <div className="header">
      <HeaderCarousel />

      <div className="header-text-container">
        <div className="header-text xf-p-6 xf-p-lg-10">
          <h1 className="xf-text-24 xf-text-40-xl xf-mb-2">
            Dream gardens that don’t cost the earth
          </h1>
          <p className="xf-text-12 xf-text-14-lg xf-text-16-xl xf-fw-400 xf-mb-5 xf-mb-lg-7">
            With competitive pricing, experience the value of our affordable
            landscaping solutions as we create stunning outdoor spaces that suit
            your needs and exceed your expectations.
          </p>

          <a href="/our-work">
            <BdButton>View our work</BdButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

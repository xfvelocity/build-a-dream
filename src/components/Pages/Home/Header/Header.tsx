import React from "react";

// ** Composables **
import { useMediaQuery } from "../../../../composables/mediaQueries";
import { initObserver } from "../../../../composables/intersectionObserver";

// ** Images **
import HeaderImage1920 from "../../../../images/home/header-w1920.webp";
import HeaderImage500 from "../../../../images/home/header-w500.webp";
import HeaderImage50 from "../../../../images/home/header-w50.webp";

// ** Components **
import BdButton from "../../../Button/BdButton";
import FuzzyImage from "../../../FuzzyImage/FuzzyImage";

const Header = () => {
  // ** Data **
  const { isSmall } = useMediaQuery();
  const { inView } = initObserver("header");

  return (
    <div className="header">
      <div className="header-img">
        <FuzzyImage
          img={isSmall ? HeaderImage1920.src : HeaderImage500.src}
          minImg={isSmall ? HeaderImage500.src : HeaderImage50.src}
          background
        />
      </div>

      <div className="header-text-container">
        <div
          id="header"
          className={`header-text xf-p-6 xf-p-lg-10 transition ${
            inView ? "transition-in-view" : ""
          }`}
        >
          <h1 className="xf-text-24 xf-text-40-xl xf-mb-2">
            Dream gardens that don’t cost the earth
          </h1>
          <p className="xf-text-12 xf-text-14-lg xf-text-16-xl xf-fw-400 xf-mb-5 xf-mb-lg-7">
            With competitive pricing, experience the value of our affordable
            landscaping solutions as we create stunning outdoor spaces that suit
            your needs and exceed your expectations.
          </p>

          <a href="/our-work" aria-label="our work">
            <BdButton>View our work</BdButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

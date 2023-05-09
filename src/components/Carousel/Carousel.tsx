"use client";
import { useState } from "react";
import "./Carousel.scss";

const Carousel = (props) => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <>
      <div className="carousel">
        {props.children.map((child, i) => (
          <div className="carousel-slide" key={i}>
            {child}
          </div>
        ))}
      </div>

      <button onClick={() => setActiveSlide(-1)}>Prev</button>
      <button onClick={() => setActiveSlide(+1)}>Next</button>
    </>
  );
};

export default Carousel;

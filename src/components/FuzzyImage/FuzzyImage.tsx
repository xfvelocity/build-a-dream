import React, { useRef, useState } from "react";

// ** Styles **
import "./FuzzyImage.scss";

interface Props {
  img: string;
  minImg: string;
  background?: boolean;
}

const FuzzyImage = ({ img, minImg, background }: Props) => {
  // ** Data **
  const imgContainer = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  // ** Methods **
  const setNewImage = (imageUrl: string | null): void => {
    if (imgContainer?.current && imageUrl) {
      imgContainer.current.style.backgroundImage = img;
      imgContainer.current.classList.add("fuzzy-image-loaded");
    }
  };

  const lazyLoad = (): void => {
    if (imgContainer?.current) {
      const imageUrl: string | null =
        imgContainer.current.getAttribute("data-image-full");

      if (image?.current) {
        image.current.src = imageUrl || "";

        image.current.addEventListener("load", () => setNewImage(imageUrl));
      }
    }
  };

  useState(() => setTimeout(lazyLoad, 100));

  return (
    <div
      className={`fuzzy-image ${background ? "fuzzy-image-background" : ""}`}
      ref={imgContainer}
      style={{ "--minImg": minImg } as React.CSSProperties}
      data-image-full={img}
    >
      <img ref={image} src={minImg} alt="" />
    </div>
  );
};

export default FuzzyImage;

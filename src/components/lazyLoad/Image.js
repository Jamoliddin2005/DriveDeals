import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ image }) {
  return <LazyLoadImage src={image} effect="blur" alt="jpg" />;
}

export default Image;

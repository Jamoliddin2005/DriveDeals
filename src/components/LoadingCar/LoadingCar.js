import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";

function LoadingCar({ src }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
    const image = new Image();

    image.onload = () => {
      setIsImageLoaded(true);
    };

    image.src = src;

    return () => {
      image.onload = null;
    };
  }, [src]);

  return (
    <div className="loading_div">
      {isImageLoaded ? <img src={src} alt={"jpg"} /> : <Loading />}
    </div>
  );
}

export default LoadingCar;

import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";

function LoadingCar({ src }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  console.log(isImageLoaded);

  const LoadingImage = async () => {
    const image = new Image();

    image.src = src;

    return await (image.onload = () => {
      setIsImageLoaded(true);
    });
  };

  LoadingImage()
  //   useEffect(() => {
  //     const image = new Image();

  //     image.onload = () => {
  //       setIsImageLoaded(true);
  //       // Your custom logic after the image has loaded
  //     };

  //     image.src = src;

  //     // Cleanup the image.onload handler on component unmount
  //     return () => {
  //       image.onload = null;
  //     };
  //   }, [src]);

  return (
    <div>{isImageLoaded ? <img src={src} alt={"jpg"} /> : <Loading />}</div>
  );
}

export default LoadingCar;

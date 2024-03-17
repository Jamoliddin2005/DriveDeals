import React, { useState } from "react";
import classes from "./header.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const [video, setVideo] = useState(false);

  const videoEnded = () => {
    setVideo(true);
  };

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
  };

  const images = [
    "/assets/img/header-bg-1.png",
    "/assets/img/header-bg-2.png.jpg",
    "/assets/img/header-bg-3.png",
    "/assets/img/header-bg-4.png.jpg",
  ];

  return (
    <div className={classes.Header}>
      {video ? (
        <div className={classes.car_photos}>
          <Slider {...settings}>
            {images?.map((item, index) => (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className={classes.video}>
          <div className={classes.background}></div>
          <video
            className={video || classes.videoActive}
            src="/assets/video/header-bg.mp4"
            autoPlay
            muted
            onEnded={videoEnded}
          ></video>
        </div>
      )}
    </div>
  );
}

export default Header;

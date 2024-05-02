import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AOS from "aos";

function Header() {
  const [video, setVideo] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
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
    "/assets/img/home/header-bg-1.png",
    "/assets/img/home/header-bg-2.png.jpg",
    "/assets/img/home/header-bg-3.png",
    "/assets/img/home/header-bg-4.png.jpg",
  ];

  return (
    <>
      <div className={classes.Header}>
        <div className={classes.background}></div>
        <div className={classes.item}>
          <h1 data-aos="fade-up" data-aos-duration="900">
            Drive Your Dreams <br /> Today
          </h1>
          <div
            className={classes.buttons}
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-duration="1000"
          >
            <Link to={"/catalog"}>Смотреть каталог</Link>
            <Link to={"/contact"}>Связаться с нами</Link>
          </div>
        </div>
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
    </>
  );
}

export default Header;

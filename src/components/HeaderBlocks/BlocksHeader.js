import React, { useEffect, useState } from "react";
import classes from "./BlocksHeader.module.css";
import AOS from "aos";

function BlocksHeader() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [blockImages] = useState([
    "/assets/img/about-block-6.jpg",
    "/assets/img/about1.jpg",
    "/assets/img/about-block-4.jpg",
    "/assets/img/about-block-5.jpg",
    "/assets/img/block-2.jfif",
    "/assets/img/about-block-3.jpg",
  ]);

  return (
    <div className={classes.BlocksHeader}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          {blockImages.map((item, index) => (
            <div
              className={classes.block}
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlocksHeader;

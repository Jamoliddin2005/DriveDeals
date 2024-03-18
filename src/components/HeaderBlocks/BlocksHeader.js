import React, { useEffect, useState } from "react";
import classes from "./BlocksHeader.module.css";
import AOS from "aos";

function BlocksHeader() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [blockImages] = useState([
    "/assets/img/block-1.jfif",
    "/assets/img/block-5.jpeg",
    "/assets/img/block-2.jfif",
    "/assets/img/block-3.jfif",
    "/assets/img/block-6.jfif",
    "/assets/img/block-4.jfif",
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

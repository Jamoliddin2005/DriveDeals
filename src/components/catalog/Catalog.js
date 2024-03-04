import React, { useEffect } from "react";
import classes from "./catalog.module.css";
import { Link } from "react-router-dom";

import data from "../../data.json";

function Catalog({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={classes.catalog}>
      <div className="container">
        <h1>Каталог Автомобилей</h1>
        <div className={`row ${classes.row}`}>
          {data.catalog ? (
            data.catalog.map((item, index) => (
              <Link
                to={`/cars/${item.name}`}
                key={index}
                className={classes.item}
              >
                <img src={`${item.img}`} alt="" />
              </Link>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;

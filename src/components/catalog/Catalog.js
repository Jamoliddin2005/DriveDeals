import React, { useEffect, useState } from "react";
import classes from "./catalog.module.css";
import { Link } from "react-router-dom";

import Loading from "../loading/Loading";

function Catalog({ GetUrl, catalogs, loading }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={classes.catalog}>
      <div className="container">
        <h1>Каталог Автомобилей</h1>
        <div className={`row ${classes.row}`}>
          {loading ? (
            catalogs.map((item, index) => (
              <Link
                to={`/cars/${item.name}`}
                key={index}
                className={classes.item}
              >
                <img
                  src={`https://drive-deals-server.vercel.app/${item.img}`}
                  alt=""
                />
              </Link>
            ))
          ) : (
            <div className="loading_div">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;

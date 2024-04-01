import React, { useEffect } from "react";
import classes from "./catalog.module.css";
import { Link } from "react-router-dom";
import Image from "../lazyLoad/Image";
import data from "../../data.json";
import { Helmet } from "react-helmet";

import Loading from "../loading/Loading";

function Catalog({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [GetUrl]);

  return (
    <>
      <Helmet>
        <title>Каталог автомобилей - Drive Deals </title>
        <meta
          name="description"
          content="Покупайте разнообразные автомобили на - Drive Deals"
        />
      </Helmet>

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
                  <Image image={item.img} />
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
    </>
  );
}

export default Catalog;

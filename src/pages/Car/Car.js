import React, { useEffect, useState } from "react";
import classes from "./car.module.css";
import { Link } from "react-router-dom";
import Cars from "../../data.json";
import Image from "../../components/lazyLoad/Image";
import { Helmet } from "react-helmet";
import Loading from "../../components/loading/Loading";

function Car({ GetUrl }) {
  const location = window.location.pathname.split("/")[2];

  const [car, setCar] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    GetUrl();
  });

  const getCategoryCars = () => {
    Cars?.catalog.forEach((item) => {
      if (item.name === location) {
        setCar(item);
      }
    });
  };

  useEffect(() => {
    getCategoryCars();
  }, []);

  return (
    <>
      {car?.name && (
        <Helmet>
          <title>{car?.name.toUpperCase()} - Drive Deals</title>
          <meta
            name="description"
            content={`${car?.name} - самые новые автомобили на Drive Deals`}
          />
        </Helmet>
      )}
      <div className={classes.car}>
        {car ? (
          <div>
            <div className="container">
              <div className={`${classes.navbar}`}>
                <Link to={`/cars/${location}`}>
                  <Image image={car?.logo} />
                </Link>
              </div>

              <div className={`${classes.categories} row`}>
                {car?.cars?.map((element, index) => {
                  if (
                    element.id < 100 ||
                    element.id === "song-plus" ||
                    element.id === "han" ||
                    element.id === "qin-plus"
                  ) {
                    return (
                      <div className={classes.category} key={element.id}>
                        <div className={classes.carName}>
                          <h3>{element?.name}</h3>
                        </div>
                        <div className={classes.image}>
                          <img src={element.img} alt="" />
                        </div>
                        <div className={classes.hover}>
                          <img src={element.hover} alt="" />
                        </div>
                        {element.id === "song-plus" || element.id === "han" || element.id === "qin-plus" ? (
                          <Link to={`/byd/${element.id}`}>Узнать больше</Link>
                        ) : (
                          <Link
                            to={`${
                              element.mega
                                ? "/cars/li-auto/mega"
                                : `/cars/${location}/${element.id}`
                            }`}
                          >
                            Узнать больше
                          </Link>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.loading_car}>
            <Loading/>
          </div>
        )}
      </div>
    </>
  );
}

export default Car;

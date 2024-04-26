import React, { useEffect, useState } from "react";
import classes from "./car.module.css";
import { Link } from "react-router-dom";
import Image from "../../components/lazyLoad/Image";
import Car from "../../components/cars/byd.json";

function CategoryCar({ GetUrl }) {
  const location = window.location.pathname.split("/")[2];

  const [car, setCar] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    GetUrl();
  });

  const getCategoryCars = () => {
    if (location === "song-plus") {
      setCar(Car?.songPlus[0]);
    }
    else if (location === "qin-plus") {
      setCar(Car?.qinPlus[0]);
    }
     else if (location === "han") {
      setCar(Car?.han[0]);
    }
  };

  useEffect(() => {
    getCategoryCars();
  }, []);

  return (
    <div className={classes.car}>
      {car ? (
        <div>
          <div className="container">
            <div className={`${classes.navbar}`}>
              <Link to={`/byd/${location}`}>
                <Image image={car?.logo} />
              </Link>
            </div>

            <div className={`${classes.categories} row`}>
              {car?.catalog?.map((element, index) => {
                return (
                  <div className={classes.category} key={index}>
                    <div className={classes.carName}>
                      <h3>{element?.name}</h3>
                    </div>
                    <div className={classes.image}>
                      <img src={element.img} alt="" />
                    </div>
                    <div className={classes.hover}>
                      <img src={element.hover} alt="" />
                    </div>
                    <Link to={`/cars/byd/${element.id}`}>Узнать больше</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default CategoryCar;

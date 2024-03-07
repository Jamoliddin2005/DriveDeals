import React, { useEffect, useState } from "react";
import classes from "./car.module.css";
import { Link } from "react-router-dom";
import Cars from "../../data.json";
import Image from "../../components/lazyLoad/Image";

function Car({ GetUrl }) {
  const location = window.location.pathname.split("/")[2];

  const [car, setCar] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    GetUrl();

    Cars?.catalog.forEach((item) => {
      if (item.name === location) {
        setCar(item);
        return;
      }
    });
  });

  return (
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
                if (element.id < 500) {
                  return (
                    <div className={classes.category} key={element.id}>
                      <div className={classes.image}>
                        <img src={element.img} alt="" />
                      </div>
                      <div className={classes.hover}>
                        <img src={element.hover} alt="" />
                      </div>
                      <Link
                        to={`${
                          element.mega
                            ? "/cars/li-auto/mega"
                            : `/cars/${location}/${element.id}`
                        }  `}
                      >
                        Узнать больше
                      </Link>
                    </div>
                  );
                }
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

export default Car;

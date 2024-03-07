import React, { useEffect, useState } from "react";
import classes from "./car.module.css";
import { Link } from "react-router-dom";

function Car({ GetUrl, catalogs }) {
  const location = window.location.pathname.split("/")[2];

  const [car, setCar] = useState(false);

  useEffect(() => {
    GetUrl();

    catalogs.forEach((item) => {
      if (item.name === location) {
        setCar(item);
        return;
      }
    });
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={classes.car}>
      {car ? (
        <div>
          <div className="container">
            <div className={`${classes.navbar}`}>
              <Link to={`/cars/${location}`}>
                <img
                  src={`https://drive-deals-server.vercel.app/${car?.logo}`}
                  alt=""
                />
              </Link>
            </div>

            <div className={`${classes.categories} row`}>
              {car?.cars?.map((element, index) => {
                if (element.id < 500) {
                  return (
                    <div className={classes.category} key={element.id}>
                      <img
                        src={`https://drive-deals-server.vercel.app/${element.img}`}
                        alt=""
                      />
                      <img
                        src={`https://drive-deals-server.vercel.app/${element.hover}`}
                        alt=""
                      />
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

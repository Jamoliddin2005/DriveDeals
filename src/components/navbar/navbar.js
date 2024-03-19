import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Bars from "../bars/bars";

function Navbar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <>
      <div className={`${classes.navbar} ${url === "/" && classes.homeNav}`}>
        <div className="container">
          <div className="row df_aic_jus_between">
            <div className={classes.left}>
              <Link to={"/"}>
                <img src="/assets/img/logo.png" alt="" />
              </Link>
            </div>
            <div className={classes.right}>
              <ul className={`df_aic_jus_between`}>
                <li>
                  <Link to={"/"} className={url === "/" ? classes.active : ""}>
                    Главная{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className={url === "/about" ? classes.active : ""}
                  >
                    О нас{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/service"}
                    className={url === "/service" ? classes.active : ""}
                  >
                    Введение в сервис{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className={url === "/catalog" ? classes.active : ""}
                  >
                    Каталог автомобилей{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={url === "/contact" ? classes.active : ""}
                  >
                    Свяжитесь с нами{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {width <= 750 && <Bars color={"white"} />}
    </>
  );
}

export default Navbar;

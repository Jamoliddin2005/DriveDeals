import React, { useState } from "react";
import classes from "./bars.module.css";
import { Link } from "react-router-dom";

function Bars({ white }) {
  const [bars, setBars] = useState(false);

  return (
    <div className={classes.nav}>
      <div className={classes.bars} onClick={() => setBars(true)}>
        <div className={classes.line} style={{ background: white }}></div>
        <div className={classes.line} style={{ background: white }}></div>
        <div className={classes.line} style={{ background: white }}></div>
      </div>

      <div className={`${classes.navbarBars} ${bars && classes.active}`}>
        <div className={classes.bars} onClick={() => setBars(false)}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <ul>
          <li>
            <Link
              to={"/"}
              className={classes.active}
              onClick={() => setBars(false)}
            >
              Главная{" "}
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setBars(false)}>
              О нас{" "}
            </Link>
          </li>
          <li>
            <Link to={"/service"} onClick={() => setBars(false)}>
              Введение в сервис{" "}
            </Link>
          </li>
          <li>
            <Link to={"/catalog"} onClick={() => setBars(false)}>
              Каталог автомобилей{" "}
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setBars(false)}>
              Свяжитесь с нами{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bars;

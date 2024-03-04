import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={classes.navbar}>
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
                <Link to={"/"} className={classes.active}>
                  Главная{" "}
                </Link>
              </li>
              <li>
                <Link to={"/about"}>О нас </Link>
              </li>
              <li>
                <Link to={"/service"}>Введение в сервис </Link>
              </li>
              <li>
                <Link to={"/catalog"}>Каталог автомобилей </Link>
              </li>
              <li>
                <Link to={"/contact"}>Свяжитесь с нами </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

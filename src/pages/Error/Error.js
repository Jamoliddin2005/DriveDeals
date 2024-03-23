import React, { useEffect } from "react";
import classes from "./error.module.css";
import { Link } from "react-router-dom";

function Error({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <div className={classes.error}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to={"/"}>ВЕРНУТЬСЯ на главную</Link>
    </div>
  );
}

export default Error;

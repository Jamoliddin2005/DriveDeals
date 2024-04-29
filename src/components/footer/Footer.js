import React from "react";
import classes from "./footer.module.css";
import Cars from "../../car.json";
import { Link } from "react-router-dom";

function Footer() {
  let cars = Cars.cars.map((cars) => {
    return cars.name;
  });

  return (
    <div className={`${classes.Foot_contact} ${classes.footer}`}>
      <div className={classes.item}></div>

      <div className={classes.container}>
        <div className="container">
          <div className="row">
            <div className={classes.left}>
              <h3>Drive Deals CO., LTD.</h3>
              <ul>
                <li>
                  <span>Телефон:</span> <a href="tel:+8613910671550">+8613910671550</a>
                </li>
                <li>
                  <span>Адрес:</span>
                  <a href="#">
                    Beijing City, Fangshan District, Fusheng East Street,
                    WuKuang Premium, Building A
                  </a>
                </li>
                <li>
                  <span>Почта:</span>
                  <a href="mailto: drive.deals@mail.ru">drive.deals@mail.ru</a>
                </li>
                <li>
                  <span>Веб-сайт:</span>
                  <a href="http://drive-deals.ru/">drive-deals.ru</a>
                </li>
              </ul>
            </div>
            <div className={classes.right}>
              <ul>
                <li>
                  <Link to="/about">About Drive Deals</Link>
                </li>
                <li>
                  <a href="#">Company Profile</a>
                </li>
                <li>
                  <a href="#">Our main mission</a>
                </li>
                <li>
                  <a href="#">Our strengths</a>
                </li>

                <li className={classes.right_ul_bottom}>
                  <a href="#">Customer Service</a>
                </li>

                <li>
                  <a href="#">Marketing Network</a>
                </li>
                <li>
                  <Link to="/service">Service Introduction</Link>
                </li>

                <li className={classes.right_contact}>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <ul>
                <li className={classes.title}>Product Center</li>
                {cars?.map((item, index) => (
                  <li key={index}>
                    <Link to={`/cars/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

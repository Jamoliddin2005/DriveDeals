import React, { useEffect } from "react";
import classes from "../../components/footer/footer.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Contact({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <>
      <Helmet>
        <title>Контакты - Drive Deals | Свяжитесь с нами</title>
        <meta name="description" content="Свяжитесь с нами - Drive Deals" />
      </Helmet>

      <div className={`${classes.Foot_contact} ${classes.contact}`}>
        <div className={classes.item}></div>

        <div className={classes.container}>
          <div className="container">
            <h2>Свяжитесь с нами</h2>
            <div className="row">
              <div className={classes.contact_left}>
                <li>
                  Телефонный номер
                  <a href="tel:+13910671550">+13910671550</a>
                </li>
                <li>
                  Электронный адрес
                  <a href="mailto: drive.deals@mail.ru">drive.deals@mail.ru</a>
                </li>
                <li>
                  Сайт
                  <a href="http://drive-deals.ru/">drive-deals.ru</a>
                </li>
              </div>
              <div className={classes.contact_right}>
                <li>
                  <a href="#">
                    <span>
                      {" "}
                      <img src="/assets/icons/facebook.png" alt="" />
                    </span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://t.me/DD_BHLX">
                    <span>
                      <img src="/assets/icons/telegram.png" alt="" />
                    </span>
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/drive_deals_china">
                    {" "}
                    <span>
                      {" "}
                      <img src="/assets/icons/instagram.webp" alt="" />
                    </span>
                    Instagram
                  </a>
                </li>
              </div>
            </div>

            <div className={classes.btn}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 227.096 227.096"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <polygon points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723     146.933,181.902 152.835,187.811 227.096,113.55   " />
                    </g>
                  </g>
                </svg>
              </span>
              <Link to={"/"}>Заказать авто</Link>
            </div>

            <img src="/assets/img/phone.svg" alt="" className={classes.phone} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

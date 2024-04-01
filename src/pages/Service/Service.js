import React, { useEffect } from "react";
import classes from "./Service.module.css";
import AOS from "aos";
import { Helmet } from "react-helmet";

function Service({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Service - Drive-Deals</title>
        <meta
          name="description"
          content="Компания Drive Deals уже экспортировала более 6000 автомобилей с объемом продаж в 200 миллионов долларов США."
        />
      </Helmet>

      <div className={classes.service}>
        <div className={classes.map} data-aos="fade-up" data-aos-duration="800">
          <iframe
            src="/assets/map/map.html"
            width="100%"
            title={"MapService"}
          ></iframe>
        </div>

        <div className="container">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            ВВЕДЕНИЕ В СЕРВИС
          </h1>
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <div
                className={`row ${classes.left_row}`}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className={classes.block}>
                  <h2>01</h2>
                  <h4>Подтверждение модели, цвета, места доставки</h4>
                  <p>
                    Выберите желаемую модель, цвет и место доставки. Наш
                    менеджер свяжется с вами для уточнения всех деталей.
                  </p>
                </div>
                <div className={classes.block}>
                  <h2>02</h2>
                  <h4>Получение котировки</h4>
                  <p>
                    Мы предоставим вам подробную котировку, включающую стоимость
                    автомобиля, логистику и другие расходы.
                  </p>
                </div>
                <div className={classes.block}>
                  <h2>03</h2>
                  <h4>Подписание контракта и внесение оплаты</h4>
                  <p>
                    После вашего согласия мы подготовим контракт, который вы
                    сможете подписать, и организуем внесение оплаты.
                  </p>
                </div>
                <div className={classes.block}>
                  <h2>04</h2>
                  <h4>Организация экспортных процедур</h4>
                  <p>
                    Наша команда профессионалов возьмет на себя все экспортные
                    процедуры, включая таможенное оформление и логистику.{" "}
                  </p>
                </div>
                <div className={classes.block}>
                  <h2>05</h2>
                  <h4>Доставка к месту назначения</h4>
                  <p>
                    Мы организуем надежную доставку вашего автомобиля к
                    указанному месту назначения.
                  </p>
                </div>
                <div className={classes.block}>
                  <h2>06</h2>
                  <h4>Получение и проверка автомобиля</h4>
                  <p>
                    По прибытии автомобиля вы сможете его получить и осуществить
                    проверку, убедившись в его отличном состоянии.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={classes.right}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src="/assets/img/service.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

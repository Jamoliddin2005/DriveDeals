import React, { useEffect } from "react";
import classes from "./Service.module.css";
import AOS from "aos";

function Service({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.service}>
      <div className={classes.map} data-aos="fade-up" data-aos-duration="800">
        <iframe src="./map.html" width="100%"></iframe>
      </div>

      <div className="container">
        <div className={`${classes.row} row`}>
          <div
            className={classes.service_type}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={classes.service_type_top}>
              <h2 className={classes.service_type_title}>
                Получение котировки
              </h2>
              <p className={classes.service_type_text}>
                Мы предоставим вам подробную котировку, включающую стоимость
                автомобиля, логистику и другие расходы.
              </p>
            </div>
            <div className={classes.service_type_images}>
              <img src="/assets/img/service-1.png" alt="" />
            </div>

            <div className={classes.service_type_bottom}>
              <h2 className={classes.service_type_title}>
                Подтверждение модели, цвета, места доставки
              </h2>
              <p className={classes.service_type_text}>
                Выберите желаемую модель, цвет и место доставки. Наш менеджер
                свяжется с вами для уточнения всех деталей.
              </p>
            </div>
          </div>
          <div
            className={classes.service_type}
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div className={classes.service_type_top}>
              <h2 className={classes.service_type_title}>
                Организация экспортных процедур
              </h2>
              <p className={classes.service_type_text}>
                Наша команда профессионалов возьмет на себя все экспортные
                процедуры, включая таможенное оформление и логистику.
              </p>
            </div>

            <div className={classes.service_type_images}>
              <img src="/assets/img/service-2.png" alt="" />
            </div>

            <div className={classes.service_type_bottom}>
              <h2 className={classes.service_type_title}>
                Подписание контракта и внесение оплаты
              </h2>
              <p className={classes.service_type_text}>
                После вашего согласия мы подготовим контракт, который вы сможете
                подписать, и организуем внесение оплаты.
              </p>
            </div>
          </div>
          <div
            className={classes.service_type}
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className={classes.service_type_top}>
              <h2 className={classes.service_type_title}>
                Получение и проверка автомобиля
              </h2>
              <p className={classes.service_type_text}>
                По прибытии автомобиля вы сможете его получить и осуществить
                проверку, убедившись в его отличном состоянии.
              </p>
            </div>

            <div className={classes.service_type_images}>
              <img src="/assets/img/service-3.png" alt="" />
            </div>

            <div className={classes.service_type_bottom}>
              <h2 className={classes.service_type_title}>
                Доставка к месту назначения
              </h2>
              <p className={classes.service_type_text}>
                Мы организуем надежную доставку вашего автомобиля к указанному
                месту назначения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

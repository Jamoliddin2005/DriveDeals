import React, { useEffect } from "react";
import classes from "./Service.module.css";

function Service({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={classes.service}>
      <div className={classes.map}>
        <iframe src="./map.html" width="100%"></iframe>
      </div>

      <div className="container">
        <div className={`${classes.row} row`}>
          <div className={classes.service_type}>
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
              <img
                src="https://www.svgrepo.com/show/54378/dollar-symbol.svg"
                alt="svg"
              />
              <img
                src="https://www.svgrepo.com/show/54378/dollar-symbol.svg"
                alt="svg"
              />
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
          <div className={classes.service_type}>
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
              <img
                src="https://www.svgrepo.com/show/54378/dollar-symbol.svg"
                alt="svg"
              />
              <img
                src="https://www.svgrepo.com/show/54378/dollar-symbol.svg"
                alt="svg"
              />
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
          <div className={classes.service_type}>
            <div className={classes.service_type_top}>
              <h2 className={classes.service_type_title}>
                Получение и проверка автомобиля
              </h2>
              <p className={classes.service_type_text}>
                Мы предоставим вам подробную котировку, включающую стоимость
                автомобиля, логистику и другие расходы.
              </p>
            </div>

            <div className={classes.service_type_images}>
              <img
                src="https://www.svgrepo.com/show/54378/dollar-symbol.svg"
                alt="svg"
              />
              <img
                src="https://www.svgrepo.com/show/54378/dollar-symbol.svg"
                alt="svg"
              />
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
        </div>
      </div>
    </div>
  );
}

export default Service;

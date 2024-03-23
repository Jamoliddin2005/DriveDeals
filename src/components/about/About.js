import React, { useEffect } from "react";
import classes from "./about.module.css";
import Image from "../lazyLoad/Image";
import AOS from "aos";
import Form from "../form/form";

function About({ GetUrl }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    GetUrl();
  }, [GetUrl]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={`${classes.about} `} id="about">
        <div className="container">
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <h1 data-aos="fade-down" data-aos-duration="800">
                О компании
              </h1>

              <p data-aos="fade-right" data-aos-duration="700">
                Drive Deals экспортная компания, которая отличается своим
                стремлением к качеству и профессионализму. Основанная в 2022
                году в столице Поднебесной - городе Пекин, она специализируется
                на поиске и экспорте высококачественных автомобилей по всему
                миру.
              </p>

              <p data-aos="fade-right" data-aos-duration="600">
                Несмотря на свой молодой возраст, компания уже достигла
                впечатляющих результатов благодаря своему уникальному подходу к
                работе и стремлению к удовлетворению потребностей клиентов.
              </p>

              <p data-aos="fade-right" data-aos-duration="800">
                Drive Deals - это не просто компания, это команда
                профессионалов, готовых предложить лучшие автомобили и
                обеспечить высочайший уровень обслуживания.
              </p>
            </div>
            <div className={classes.right} data-aos="zoom-in-left">
              <div className={classes.about_pc_image}>
                <Image image={"/assets/img/about.jfif"} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
      </div>

      <div className={classes.about_center}>
        <div className="container">
          <h1
            className={classes.title}
            data-aos="fade-down"
            data-aos-duration="700"
          >
            Наши сильные стороны:
          </h1>
          <div className={`${classes.row} row`}>
            <div
              className={classes.box}
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div className={classes.head}>
                <img src="/assets/icons/human.png" alt="" />
              </div>
              <h3>Эффективное таможенное оформление</h3>
              <p>
                Мы предлагаем профессиональное сопровождение процесса
                таможенного оформления, обеспечивая надежную защиту автомобилей
                во время транспортировки, минимизируя временные и финансовые
                затраты клиентов.
              </p>
              <h4> N° 1</h4>
            </div>
            <div
              className={classes.box}
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <div className={classes.head}>
                <img src="/assets/icons/clock.png" alt="" />
              </div>
              <h3>Быстрая доставка</h3>
              <p>
                Наша компания гарантирует оперативную доставку автомобилей в
                любую точку мира, обеспечивая клиентам минимальные сроки
                ожидания.
              </p>
              <h4> N° 2</h4>
            </div>
            <div
              className={classes.box}
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className={classes.head}>
                <img src="/assets/icons/voice.png" alt="" />
              </div>
              <h3>Конкурентоспособные цены</h3>
              <p>
                Мы гарантируем клиентам конкурентоспособные цены на все наши
                услуги, обеспечивая высокое качество обслуживания по оптимальным
                тарифам.
              </p>
              <h4> N° 3</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.about2}>
        <div className="container">
          <div className={`${classes.row_big} row`}>
            <div className={classes.left}>
              <div className={`${classes.row} row`}>
                <div
                  className={classes.item}
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <div className={classes.top}>
                    <img src="/assets/icons/time.png" alt="" />
                  </div>
                  <p>
                    Наша компания <span>Drive Deals</span> предлагает широкий
                    выбор автомобилей различных марок и моделей, а также
                    предлагаем гибкие и надежные услуги доставки, таможенного
                    оформления, страхования и многие другие.
                  </p>
                </div>
                <span className={classes.line}></span>
                <div
                  className={classes.item}
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  <div className={classes.top}>
                    <img src="/assets/icons/puzle.png" alt="" />
                  </div>
                  <p>
                    Главная миссия нашей компании заключается в обеспечении
                    клиентов высококачественными услугами по экспорту
                    автомобилей. Наша цель - сделать процесс экспорта
                    автомобилей максимально простым и удобным для наших
                    клиентов, обеспечивая им полное удовлетворение от наших
                    услуг.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.office}>
        <iframe src="/assets/map/office.html" width={"100%"}></iframe>
      </div>
      <Form />
    </>
  );
}

export default About;

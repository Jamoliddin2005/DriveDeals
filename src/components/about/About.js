import React, { useEffect } from "react";
import classes from "./about.module.css";
import Image from "../lazyLoad/Image";

function About({ GetUrl }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    GetUrl();
  }, [GetUrl]);

  return (
    <>
      <div className={`${classes.about} `} id="about">
        <div className="container">
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <h1>О компании</h1>

              <p>
                Drive Deals экспортная компания, которая отличается своим
                стремлением к качеству и профессионализму. Основанная в 2022
                году в столице Поднебесной - городе Пекин, она специализируется
                на поиске и экспорте высококачественных автомобилей по всему
                миру.
              </p>

              <p>
                Несмотря на свой молодой возраст, компания уже достигла
                впечатляющих результатов благодаря своему уникальному подходу к
                работе и стремлению к удовлетворению потребностей клиентов.
              </p>

              <p>
                Drive Deals - это не просто компания, это команда
                профессионалов, готовых предложить лучшие автомобили и
                обеспечить высочайший уровень обслуживания.
              </p>
            </div>
            <div className={classes.right}>
              <div className={classes.about_pc_image}>
                <Image image={"/assets/img/about.png"} />
              </div>
              <div className={classes.about_mobile_image}>
                <Image image={"/assets/img/about_logo.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.about_center}>
        <div className="container">
          <h1 className={classes.title}>Наши сильные стороны:</h1>
          <div className={`${classes.row} row`}>
            <div className={classes.box}>
              <div className={classes.head}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 12v-5h-1.999v6.999h5.999v-1.999h-4zm-12.197-4.285c-1.261-1.944-1.035-4.569.675-6.266 1.7-1.687 4.305-1.896 6.235-.645-3.171 1.219-5.692 3.741-6.91 6.911zm18.428 11.18c1.715-1.794 2.771-4.219 2.771-6.896 0-5.522-4.477-10-10.002-10-5.522 0-10 4.477-10 10 0 2.678 1.059 5.104 2.772 6.898l-1.736 4.506c-.159.394.288.759.643.522l3.581-3.122c1.412.761 3.026 1.195 4.742 1.195 1.717 0 3.334-.434 4.744-1.195l3.582 3.122c.355.237.803-.128.643-.522l-1.74-4.508zm-7.23 1.103c-4.412 0-8.001-3.588-8.001-8s3.589-8 8.001-8c4.412 0 8.002 3.588 8.002 8s-3.59 8-8.002 8zm10.553-18.52c-1.697-1.71-4.324-1.937-6.268-.675 3.17 1.218 5.693 3.739 6.912 6.91 1.25-1.931 1.041-4.535-.644-6.235z" />
                </svg>
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
            <div className={classes.box}>
              <div className={classes.head}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 12v-5h-1.999v6.999h5.999v-1.999h-4zm-12.197-4.285c-1.261-1.944-1.035-4.569.675-6.266 1.7-1.687 4.305-1.896 6.235-.645-3.171 1.219-5.692 3.741-6.91 6.911zm18.428 11.18c1.715-1.794 2.771-4.219 2.771-6.896 0-5.522-4.477-10-10.002-10-5.522 0-10 4.477-10 10 0 2.678 1.059 5.104 2.772 6.898l-1.736 4.506c-.159.394.288.759.643.522l3.581-3.122c1.412.761 3.026 1.195 4.742 1.195 1.717 0 3.334-.434 4.744-1.195l3.582 3.122c.355.237.803-.128.643-.522l-1.74-4.508zm-7.23 1.103c-4.412 0-8.001-3.588-8.001-8s3.589-8 8.001-8c4.412 0 8.002 3.588 8.002 8s-3.59 8-8.002 8zm10.553-18.52c-1.697-1.71-4.324-1.937-6.268-.675 3.17 1.218 5.693 3.739 6.912 6.91 1.25-1.931 1.041-4.535-.644-6.235z" />
                </svg>
              </div>
              <h3>Быстрая доставка</h3>
              <p>
                Наша компания гарантирует оперативную доставку автомобилей в
                любую точку мира, обеспечивая клиентам минимальные сроки
                ожидания.
              </p>
              <h4> N° 2</h4>
            </div>
            <div className={classes.box}>
              <div className={classes.head}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 12v-5h-1.999v6.999h5.999v-1.999h-4zm-12.197-4.285c-1.261-1.944-1.035-4.569.675-6.266 1.7-1.687 4.305-1.896 6.235-.645-3.171 1.219-5.692 3.741-6.91 6.911zm18.428 11.18c1.715-1.794 2.771-4.219 2.771-6.896 0-5.522-4.477-10-10.002-10-5.522 0-10 4.477-10 10 0 2.678 1.059 5.104 2.772 6.898l-1.736 4.506c-.159.394.288.759.643.522l3.581-3.122c1.412.761 3.026 1.195 4.742 1.195 1.717 0 3.334-.434 4.744-1.195l3.582 3.122c.355.237.803-.128.643-.522l-1.74-4.508zm-7.23 1.103c-4.412 0-8.001-3.588-8.001-8s3.589-8 8.001-8c4.412 0 8.002 3.588 8.002 8s-3.59 8-8.002 8zm10.553-18.52c-1.697-1.71-4.324-1.937-6.268-.675 3.17 1.218 5.693 3.739 6.912 6.91 1.25-1.931 1.041-4.535-.644-6.235z" />
                </svg>
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
              <h1>О компании</h1>
              <div className={`${classes.row} row`}>
                <div className={classes.item}>
                  <div className={classes.top}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                    </svg>
                  </div>
                  <p>
                    Наша компания <span>Drive Deals</span> предлагает широкий
                    выбор автомобилей различных марок и моделей, а также
                    предлагаем гибкие и надежные услуги доставки, таможенного
                    оформления, страхования и многие другие.
                  </p>
                </div>
                <span className={classes.line}></span>
                <div className={classes.item}>
                  <div className={classes.top}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 20.45c0-.932-.575-1.357-1.109-1.357-.332 0-.672.156-.953.438-.284.296-.389.469-.786.469-.47 0-1.152-.534-1.152-1.5s.682-1.5 1.152-1.5c.396 0 .501.173.785.468.281.283.621.438.953.438.534 0 1.109-.425 1.109-1.357v-3.549h3.55c.536 0 .439.139.108.454-.261.245-.657.616-.657 1.394 0 1.039 1.004 2.152 2.5 2.152s2.5-1.113 2.5-2.152c0-.777-.396-1.148-.658-1.394-.333-.317-.425-.454.108-.454h3.55v-13h-24v24h13v-3.55zm0-19.45h10v11h-2.55c-.933 0-1.356.575-1.356 1.109 0 .332.155.672.438.953.294.284.468.388.468.786 0 .47-.534 1.152-1.5 1.152s-1.5-.682-1.5-1.152c0-.397.174-.501.469-.785.282-.281.438-.621.438-.953 0-.534-.424-1.109-1.356-1.109h-3.551v-3.551c0-.535.137-.44.454-.109.245.263.616.659 1.394.659 1.039 0 2.152-1.004 2.152-2.5s-1.113-2.5-2.152-2.5c-.777 0-1.148.396-1.394.659-.317.333-.454.424-.454-.109v-3.55zm-12 0h11v3.55c0 .932.575 1.357 1.109 1.357.463 0 .775-.252 1.075-.565.207-.221.32-.342.664-.342.47 0 1.152.534 1.152 1.5s-.682 1.5-1.152 1.5c-.344 0-.457-.121-.663-.341-.302-.314-.612-.565-1.075-.565-.535-.001-1.11.424-1.11 1.356v3.55h-3.55c-.536 0-.439-.139-.108-.454.262-.245.658-.616.658-1.394 0-1.039-1.004-2.152-2.5-2.152s-2.5 1.113-2.5 2.152c0 .777.396 1.148.658 1.394.333.317.425.454-.108.454h-3.55v-11zm11 22h-11v-10h3.55c.933 0 1.356-.575 1.356-1.109 0-.463-.25-.773-.564-1.075-.221-.207-.342-.32-.342-.664 0-.47.534-1.152 1.5-1.152s1.5.682 1.5 1.152c0 .344-.121.457-.342.663-.314.302-.564.612-.564 1.075 0 .535.424 1.11 1.356 1.11h3.55v3.55c0 .535-.137.44-.454.109-.245-.263-.616-.659-1.394-.659-1.039 0-2.152 1.004-2.152 2.5s1.113 2.5 2.152 2.5c.777 0 1.148-.396 1.394-.659.317-.333.454-.424.454.109v2.55z" />
                    </svg>
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
            <div className={classes.right}>
              <Image image={"/assets/img/5.png"} />
              <Image image={"/assets/img/6.png"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

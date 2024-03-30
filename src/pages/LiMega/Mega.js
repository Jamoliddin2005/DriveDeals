import React, { useEffect } from "react";
import classes from "./mega.module.css";
import PDFViewer from "../More/PDFF";

function Mega({ GetUrl }) {
  useEffect(() => {
    // GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={classes.Mega}>
      <header>
        <img src="/assets/img/cars/lixiang/mega1.png" alt="" />
        <div className="container">
          <h1>Li Xiang Mega</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <h2>Каталог Автомобилей</h2>
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <img src="/assets/img/cars/lixiang/mega2.jpg" alt="" />
            </div>
            <div className={classes.right}>
              <p>
                <span>Li MEGA </span>
                революционизирует традиционный и шаблонный дизайн внешнего вида,
                присущий традиционным минивэнам, возглавив новую эстетическую
                тенденцию семейных минивэнов. Конструкция, основанная на
                аэродинамике, уравновешивает пространство и аккумулятор большой
                емкости, обеспечивая достаточно места в салоне с низким
                коэффициентом лобового сопротивления.
              </p>
            </div>
          </div>
          <div className={`${classes.row} row`}>
            <div className={classes.right}>
              <p>
                Оснащенный передовой электрической технологией,{" "}
                <span>Lixiang Mega </span>
                предлагает не только эффективное и долгосрочное вождение, но и
                непревзойденное внимание к безопасности. Автомобиль обладает
                передовыми системами автопилота, интеллектуальными функциями
                связи и встроенными возможностями для максимального комфорта во
                время поездок.
              </p>
            </div>
            <div className={`${classes.left} ${classes.order}`}>
              <img src="/assets/img/cars/lixiang/mega3.jpg" alt="" />
            </div>
          </div>
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <img src="/assets/img/cars/lixiang/mega4.jpg" alt="" />
            </div>
            <div className={classes.right}>
              <p>
                <span>С Li MEGA </span>
                каждая поездка становится уникальным опытом, где вы
                наслаждаетесь тишиной электромотора, отсутствием выбросов и
                чистотой окружающей среды.
              </p>
            </div>
          </div>

          <h2>Краткая характеристика</h2>

          <PDFViewer doc={"/assets/docs/lixiangMega.xlsx"} />
          
        </div>
      </section>
    </div>
  );
}

export default Mega;

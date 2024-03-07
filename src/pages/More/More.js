import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cars from "../../data.json";
import Slider from "react-slick";
import classes from "./more.module.css";
import { useNavigate } from "react-router-dom";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function More({ GetUrl }) {
  useEffect(() => {
    GetUrl();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const location = window.location.pathname.split("/")[2];
  const carId = window.location.pathname.split("/")[3];
  const sliderContainer = useRef(null);

  const [cars, setCars] = useState(null);
  const [car, setCar] = useState(null);

  const [color, setColor] = useState(0);
  const [cabin, setCabin] = useState(0);
  const [wheel, setWheel] = useState(0);

  const [imgContainerWidth, setImgContainerWidth] = useState(0);
  const [currentImgs, setCurrentImgs] = useState("");

  const [select, setSelect] = useState([""]);

  useLayoutEffect(() => {
    const carsList = Cars?.catalog?.find(
      (element) => element.name === location
    );
    if (carsList) {
      setCars(carsList);
    } else {
      setCars("error");
    }

    if (cars?.cars?.find((c) => c.id.toString() === carId.toString())) {
      setCar(cars?.cars?.find((c) => c.id.toString() === carId.toString()));
    } else {
      setCar("error");
    }

    const resizeHandler = () => {
      setImgContainerWidth(sliderContainer?.current?.clientWidth);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [location, carId, cars?.cars]);

  const GetSelect = () => {
    setSelect(car?.collection);
  };

  useEffect(() => {
    if (car) {
      if (car?.colors?.length) {
        const initColor = car.colors[0];

        setColor(initColor);
        setCurrentImgs(initColor.images);

        if (initColor.cabins.length) {
          const initCabin = initColor.cabins[0];

          setCabin(initCabin);
        }

        if (initColor.wheels.length) {
          const initWheel = initColor.wheels[0];

          setWheel(initWheel);
        }
      }
    }
    GetSelect();
  }, [car]);

  const onChangeColor = (newColor) => {
    setColor({ ...newColor });
    setCurrentImgs([...newColor.images]);
  };

  const onChangeCabin = (newCabin) => {
    setCabin({ ...newCabin });
    setCurrentImgs([...newCabin.images]);
  };

  const onChangeWheel = (newWheel) => {
    setWheel({ ...newWheel });
    setCurrentImgs([...newWheel.images]);
  };

  const navigate = useNavigate();

  const Selector = (value) => {
    GetSelect();
    navigate(`/cars/${location}/${value.target.value}`, { replace: true });
  };

  return (
    <div className={`more ${classes.more}`}>
      {car === "error" ? (
        <h1>Error</h1>
      ) : (
        <div className={classes.container}>
          <h2 className={classes.title}>Каталог автомобилей</h2>

          <main className={`row ${classes.main}`}>
            <div className={classes.left} ref={sliderContainer}>
              <Slider className={`${classes.slider}`} {...sliderSettings}>
                {currentImgs.length ? (
                  currentImgs?.map?.((img, idx) => (
                    <div key={idx} className={classes.img_div}>
                      <img src={img} alt="car-img" />
                    </div>
                  ))
                ) : (
                  <h1>"Loading..."</h1>
                )}
              </Slider>
            </div>
            <div className={classes.right}>
              <h2>Доступные варианты</h2>
              <div className={classes.selector}>
                <label htmlFor="car-select">Комплектации</label>
                <select
                  name=""
                  id="car-select"
                  onChange={(val) => Selector(val)}
                >
                  {select?.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.kuzof}>
                <h3>Цвет кузова</h3>
                <div className={classes.colors}>
                  {car?.colors?.length
                    ? car.colors.map((clr, index) => (
                        <div
                          onClick={() => onChangeColor(clr)}
                          key={index}
                          className={classes.item}
                        >
                          <span
                            className={` ${classes.span} ${
                              clr.name === color.name ? `${classes.active}` : ""
                            }`}
                          >
                            <span style={{ background: clr.color }} />
                          </span>
                          {color.name === clr.name ? (
                            <p className={classes.nameCar}>{clr.name}</p>
                          ) : null}
                        </div>
                      ))
                    : "Loading..."}
                </div>
              </div>
              <div className={classes.calon}>
                <h3>Цвет салона</h3>
                <div className={classes.colors}>
                  {color
                    ? color.cabins.map((cbn, index) => (
                        <div
                          onClick={() => onChangeCabin(cbn)}
                          key={index}
                          className={classes.item}
                        >
                          <span
                            className={`${classes.span} ${
                              cbn.name === cabin.name ? `${classes.active}` : ""
                            }`}
                          >
                            <span style={{ background: cbn.color }} />
                          </span>
                          {cbn.name === cabin.name ? (
                            <p className={classes.nameCar}>{cbn.name}</p>
                          ) : null}
                        </div>
                      ))
                    : "Loading..."}
                </div>
              </div>
              <div className={classes.circle}>
                <h3>Колеса</h3>
                <div className={classes.colors}>
                  {color
                    ? color.wheels.map((whl, index) => (
                        <div
                          onClick={() => onChangeWheel(whl)}
                          key={index}
                          className={classes.item}
                        >
                          <span
                            className={`${classes.span}  ${
                              whl.name === wheel.name ? `${classes.active}` : ""
                            }`}
                          >
                            <span className="block border border-slate-300 bg-slate-500 w-8 h-8 rounded-full outline-none cursor-pointer shadow-md hover:border-2 hover:shadow-xl transition-all" />
                          </span>
                          {whl.name === wheel.name ? (
                            <p className={classes.nameCar}>{whl.name}</p>
                          ) : null}
                        </div>
                      ))
                    : "Loading..."}
                </div>
              </div>
            </div>
          </main>

          <div className={classes.docs}>
            <h2 className={classes.title}>Краткая характеристика</h2>

            {car?.docs?.map((item, index) => (
              <div className={classes.doc} key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default More;

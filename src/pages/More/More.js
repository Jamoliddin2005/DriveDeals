import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Slider from "react-slick";
import Cars from "../../data.json";
import classes from "./more.module.css";
import Loading from "../../components/loading/Loading";
import LoadingCar from "../../components/LoadingCar/LoadingCar";
import PDFViewer from "./PDFF";
import { Helmet } from "react-helmet";
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
  });

  const location = window.location.pathname.split("/")[2];
  const carId = window.location.pathname.split("/")[3];
  const sliderContainer = useRef(null);

  const [cars, setCars] = useState(null);
  const [car, setCar] = useState(null);

  // SEO

  const [color, setColor] = useState(0);
  const [cabin, setCabin] = useState(0);
  const [protection, setProtection] = useState(0);
  const [insert, setInsert] = useState(0);
  const [wheel, setWheel] = useState(0);
  const [calon, setCalon] = useState(0);

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

        if (initColor?.cabins?.length) {
          const initCabin = initColor.cabins[0];
          setCabin(initCabin);
        }

        if (initColor?.wheels?.length) {
          const initWheel = initColor.wheels[0];
          setWheel(initWheel);
        }
        if (initColor?.calon?.length) {
          const initWheel = initColor.calon[0];
          setCalon(initWheel);
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
  const onChangeProtection = (newCabin) => {
    setProtection({ ...newCabin });
    setCurrentImgs([...newCabin.images]);
  };
  const onChangeInsert = (newCabin) => {
    setInsert({ ...newCabin });
    setCurrentImgs([...newCabin.images]);
  };

  const onChangeWheel = (newWheel) => {
    setWheel({ ...newWheel });
    setCurrentImgs([...newWheel.images]);
  };
  const onChangeCalon = (newWheel) => {
    setCalon({ ...newWheel });
    setCurrentImgs([...newWheel.images]);
  };

  const onChangeOptions = (item) => {
    item.click = !item.click;
    setCurrentImgs([...item.images]);
  };

  const navigate = useNavigate();

  const onChangeSubmitHandler = (val) => {
    if (val !== window.location.pathname.split("/")[3]) {
      setSelect([""]);
      navigate(`/cars/${location}/${val}`);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      {car?.name && (
        <Helmet>
          <title>{car?.name} - Drive Deals</title>
          <meta
            name="description"
            content={`Купите автомобиль ${car?.name} на - Drive Deals`}
          />
        </Helmet>
      )}

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
                        <LoadingCar src={img} />
                      </div>
                    ))
                  ) : (
                    <Loading />
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
                    onChange={(e) => {
                      onChangeSubmitHandler(e.target.value);
                    }}
                  >
                    {select?.map((item, index) => (
                      <option
                        value={item.linkSubmit ? item.linkSubmit : item.id}
                        key={index}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={classes.kuzof}>
                  <h3>Цвет кузова</h3>
                  <div className={classes.colors}>
                    {car?.colors?.length
                      ? car?.colors?.map((clr, index) => (
                          <div
                            onClick={() => onChangeColor(clr)}
                            key={index}
                            className={classes.item}
                          >
                            <span
                              className={` ${classes.span} ${
                                clr.name === color.name
                                  ? `${classes.active}`
                                  : ""
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
                  {color?.cabins && <h3>Цвет салона</h3>}

                  <div className={classes.colors}>
                    {color
                      ? color?.cabins?.map((cbn, index) => (
                          <div
                            onClick={() => onChangeCabin(cbn)}
                            key={index}
                            className={classes.item}
                          >
                            <span
                              className={`${classes.span} ${
                                cbn.name === cabin.name
                                  ? `${classes.active}`
                                  : ""
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

                  {cabin?.details && (
                    <div className={`${classes.calon} ${classes.calone}`}>
                      <h3>{cabin?.details?.name}</h3>
                      <div className={classes.colors}>
                        {cabin?.details?.options.map((whl, index) => (
                          <div
                            onClick={() => onChangeCalon(whl)}
                            key={index}
                            className={classes.item}
                          >
                            <span
                              className={`${classes.span}  ${
                                whl.name === calon.name
                                  ? `${classes.active}`
                                  : ""
                              }`}
                            >
                              {whl.img && <img src={whl.img} alt="" />}
                              {whl.color && (
                                <span style={{ background: whl.color }} />
                              )}
                            </span>
                            {whl.name === calon.name ? (
                              <p className={classes.nameCar}>{whl.name}</p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {color && color.protection && (
                  <div className={classes.calon}>
                    <h3>Хромированная решетка</h3>
                    <div className={classes.colors}>
                      {color
                        ? color?.protection?.map((cbn, index) => (
                            <div
                              onClick={() => onChangeProtection(cbn)}
                              key={index}
                              className={classes.item}
                            >
                              <span
                                className={`${classes.span} ${
                                  cbn.name === protection.name
                                    ? `${classes.active}`
                                    : ""
                                }`}
                              >
                                <span style={{ background: cbn.color }} />
                              </span>
                              {cbn.name === protection.name ? (
                                <p className={classes.nameCar}>{cbn.name}</p>
                              ) : null}
                            </div>
                          ))
                        : "Loading..."}
                    </div>
                  </div>
                )}
                {color && color?.insert && (
                  <div className={classes.calon}>
                    <h3>Цвет вставок</h3>
                    <div className={classes.colors}>
                      {color
                        ? color?.insert?.map((cbn, index) => (
                            <div
                              onClick={() => onChangeInsert(cbn)}
                              key={index}
                              className={classes.item}
                            >
                              <span
                                className={`${classes.span} ${
                                  cbn.name === insert.name
                                    ? `${classes.active}`
                                    : ""
                                }`}
                              >
                                <span style={{ background: cbn.color }} />
                              </span>
                              {cbn.name === insert.name ? (
                                <p className={classes.nameCar}>{cbn.name}</p>
                              ) : null}
                            </div>
                          ))
                        : "Loading..."}
                    </div>
                  </div>
                )}
                {color && color?.opt && (
                  <div className={`${classes.calon} ${classes.calone}`}>
                    <h3>{color?.opt.name}</h3>
                    <div className={classes.colors}>
                      {color
                        ? color?.opt?.options?.map((whl, index) => (
                            <div
                              onClick={() => onChangeCalon(whl)}
                              key={index}
                              className={classes.item}
                            >
                              <span
                                className={`${classes.span} 
                                
                                ${whl.img && classes.calonOptImg}

                                ${
                                  whl.name === calon.name
                                    ? `${classes.active}`
                                    : ""
                                }`}
                              >
                                {whl.img && <img src={whl.img} alt="" />}
                                {whl.color && (
                                  <span style={{ background: whl.color }} />
                                )}
                              </span>
                              {whl.name === calon.name ? (
                                <p className={classes.nameCar}>{whl.name}</p>
                              ) : null}
                            </div>
                          ))
                        : "Loading..."}
                    </div>
                  </div>
                )}

                <div className={`${classes.circle} ${classes.pos_circle}`}>
                  {color?.wheels && <h3>Колеса</h3>}
                  <div className={classes.colors}>
                    {color
                      ? color?.wheels?.map((whl, index) => (
                          <div
                            onClick={() => onChangeWheel(whl)}
                            key={index}
                            className={classes.item}
                          >
                            <span
                              className={`${classes.span}  ${
                                whl.name === wheel.name
                                  ? `${classes.active}`
                                  : ""
                              }`}
                            >
                              <img src={whl.img} alt="" />
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
                {car?.options && (
                  <>
                    <h3>Дополнительные опции</h3>
                    {car?.options.map((item, index) => (
                      <div
                        className={`${classes.step} ${classes.oneTech}`}
                        key={index}
                      >
                        <div className={classes.check}>
                          <input
                            type="checkbox"
                            name={`checkbox${index}`}
                            id={`checkbox${index}`}
                            checked={item.click}
                            onChange={() => onChangeOptions(item)}
                          />
                          <label htmlFor={`checkbox${index}`}>
                            <p>{item.name}</p>
                          </label>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </main>

            {car?.docs && (
              <div className={classes.docs}>
                <h2 className={classes.title}>Краткая характеристика</h2>

                <PDFViewer doc={car?.docs} />
              </div>
            )}
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default More;

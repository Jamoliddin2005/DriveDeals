import React, { useState } from "react";
import classes from "./buy.module.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

function Buy({
  name,
  color,
  cabin,
  wheel,
  salon,
  calon,
  details,
  options,
  insert,
  protection,
  setBuyBtn,
  buyBtnText,
}) {
  const [inputName, setInputName] = useState("");
  const [comment, setComment] = useState("");
  const [phone, setPhone] = useState("");

  const [buttonText, setButtonText] = useState("Отправить");

  const URI_API = `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`;

  let opt = [];

  if (options) {
    options?.map((item, index) => item.click && opt.push(`${item.name} \n`));
  }

  const SubmitHandler = (e) => {
    let message = `<b>drive-deals.ru</b>\n\n`;
    if (buyBtnText === "buy") {
      message += `<b>Клиент нажал кнопку: </b>Сделать заказ\n`;
    }else{
      message += `<b>Клиент нажал кнопку: </b>Оставить заявку\n`;
    }
    message += `<b>Клиент: ${inputName}</b>\n`;
    message += `<b>Номер телефона: </b> ${phone}\n`;
    message += `<b>Комментарий: </b> ${comment}\n\n`;

    message += `<b>Машина: ${name}</b>\n`;
    // message += `<b>Комплектации: </b> ${complect}\n`;
    if (color) {
      message += `<b>Цвет кузова: </b> ${color}\n`;
    }
    if (cabin) {
      message += `<b>Цвет салона: </b> ${cabin}\n`;
    }

    if (salon) {
      message += `<b>${salon?.name}: </b> ${calon}\n`;
    }
    if (details) {
      message += `<b>${details}: </b> ${calon}\n`;
    }
    if (insert) {
      message += `<b>Цвет вставок: </b> ${insert?.name}\n`;
    }
    if (protection) {
      message += `<b>Хромированная решетка: </b> ${protection}\n`;
    }
    if (opt?.length >= 1) {
      message += `\n<b>Дополнительные опции: </b>\n${opt
        .join()
        .replace(/,/g, "")}\n`;
    }

    if (wheel) {
      message += `<b>Колеса: </b> ${wheel}\n`;
    }

    message += `\n<b>Время: </b> ${new Date().toLocaleDateString()}`;

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(URI_API, {
        chat_id: process.env.REACT_APP_CHAT_ID,
        parse_mode: "html",

        text: message,
      })
      .then((res) => {
        setInputName("");
        setPhone("");
        setComment("");
        setButtonText("Отправлено");

        setTimeout(() => {
          setBuyBtn(false);
        }, 500);
      }, config)
      .catch((err) => {})
      .finally(() => {
        setInputName("");
        setPhone("");
      });
  };

  return (
    <div className={classes.Buy}>
      {buyBtnText === "buy" && (
        <>
          <h2>
            Заказать <span>{name}</span>
          </h2>
          {color && (
            <p className={classes.buyTextP}>
              Цвет кузова: <span>{color}</span>
            </p>
          )}
          {cabin && (
            <p className={classes.buyTextP}>
              Цвет салона: <span>{cabin}</span>
            </p>
          )}
          {salon && (
            <p className={classes.buyTextP}>
              {salon?.name}: <span>{calon}</span>
            </p>
          )}
          {details && (
            <p className={classes.buyTextP}>
              {details}: <span>{calon}</span>
            </p>
          )}
          {insert > 0 && (
            <p className={classes.buyTextP}>
              Цвет вставок: <span>{insert?.name}</span>
            </p>
          )}
          {protection && (
            <p className={classes.buyTextP}>
              Хромированная решетка: <span>{protection}</span>
            </p>
          )}
          {opt?.length >= 1 && (
            <p className={classes.buyTextP}>
              Дополнительные опции:{" "}
              <span>{opt.join().replace(/,/g, ", ")}</span>
            </p>
          )}

          {wheel > 0 && (
            <p className={classes.buyTextP}>
              Колеса: <span>{wheel}</span>
            </p>
          )}
        </>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          SubmitHandler();
        }}
      >
        <input
          type="text"
          placeholder="Введите ваше имя"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          required
        />
        <textarea
          placeholder="Комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <PhoneInput
          defaultCountry="ru"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          required
        />
        <button className={classes.btn} type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Buy;

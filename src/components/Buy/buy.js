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
      })
      .catch((err) => {})
      .finally(() => {
        setInputName("");
        setPhone("");
      });
  };

  return (
    <div className={classes.Buy}>
      <h2>
        Заказать <span>{name}</span>
      </h2>
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

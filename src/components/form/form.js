import React, { useEffect } from "react";
import classes from "./form.module.css";
import AOS from "aos";

function Form() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.Form}>
      <div className="container">
        <div className={`${classes.row} row`}>
          <div className={classes.left} data-aos="fade-right" data-aos-duration="1000">
            <h2>Свяжитесь с нами</h2>
            <p>
              Отправьте нам сообщение, и мы свяжемся с вами, как только сможем.
            </p>
          </div>
          <div className={classes.right}  data-aos="fade-left" data-aos-duration="1000">
            <form action="POST">
              <div className={classes.top}>
                <div className={classes.inputItem}>
                  <label htmlFor="Name">Имя</label>
                  <input type="text" name="Name" id="Name" required />
                </div>
                <div className={classes.inputItem}>
                  <label htmlFor="Email">Э-Почта</label>
                  <input type="email" name="Email" id="Email" required />
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
              <div className={classes.button}  data-aos="fade-up" data-aos-duration="600">
                <button>Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

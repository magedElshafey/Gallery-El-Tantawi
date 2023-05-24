import React from "react";
import style from "./contact.module.css";
const ContactForm = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <form className={`col-12 col-md-8 p-4 ${style.mainForm}`}>
          <div className="mb-3">
            <label htmlFor="name" className="label d-block mb-1">
              الإسم
            </label>
            <input id="name" required type="text" className={style.inp} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="label d-block mb-1">
              الإيميل
            </label>
            <input required id="email" type="email" className={style.inp} />
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="label d-block mb-1">
              رقم الموبايل
            </label>
            <input required id="tel" type="tel" className={style.inp} />
          </div>
          <div className="mb-3">
            <label htmlFor="msg" className="label d-block mb-1">
              رسالتك
            </label>
            <textarea required id="msg" type="tel" className={style.text} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

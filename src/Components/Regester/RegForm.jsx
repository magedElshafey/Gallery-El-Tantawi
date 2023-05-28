import React, { useState } from "react";
import style from "./Reg.module.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const RegForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <form className={`${style.formContainer} px-3 py-4 `}>
      <div className=" mb-4 row">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <label className="d-block mb-1 label" htmlFor="fn">
            الإسم الأول
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className={style.inp}
            id="fn"
          />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <label className="d-block mb-1 label" htmlFor="ln">
            الإسم الأخير
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className={style.inp}
            id="ln"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="label d-block mb-1" htmlFor="email">
          البريد الإلكتروني
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className={style.inp}
          id="email"
        />
      </div>
      <div className="mb-4">
        <label className="label d-block mb-1" htmlFor="password">
          كلمة المرور
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={style.inp}
          id="password"
        />
      </div>
      <div className="mb-4">
        <label className="label d-block mb-1" htmlFor="confirm">
          تأكيد كلمة المرور
        </label>
        <input
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          className={style.inp}
          id="confirm"
        />
      </div>
      <div className={`mb-4 d-flex justify-content-center `}>
        <button className={style.btn}>قم بإنشاء حساب</button>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <button className={style.googleBtn}>
          <AiOutlineGoogle size={20} />
          <span className="text-white">تابع مع جوجل</span>
        </button>
        <button className={style.faceBtn}>
          <FaFacebookF size={20} />
          <span className="text-white">تابع مع فيسبوك</span>
        </button>
      </div>
    </form>
  );
};

export default RegForm;

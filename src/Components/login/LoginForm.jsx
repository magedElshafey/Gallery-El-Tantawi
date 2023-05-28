import React from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
const LoginForm = () => {
  return (
    <form className={`${style.formContainer} px-3 py-4 `}>
      <p className="fw-bold mb-3">يمكنك تسجيل الدخول بالطرق التالية</p>
      <p className="fs-6 text-black-50 mb-4">
        إذا كان لديك حساب ، قم بتسجيل الدخول باستخدام عنوان بريدك الإلكتروني.
      </p>
      <div className="mb-4">
        <label className="d-block mb-1 label" htmlFor="email">
          البريد الإلكتروني
        </label>
        <input type="email" id="email" className={style.inp} />
      </div>
      <div className="mb-4">
        <label className="d-block mb-1 label" htmlFor="password">
          كلمة المرور
        </label>
        <input type="password" id="password" className={style.inp} />
      </div>
      <div
        className={`mb-4 d-flex justify-content-center gap-4 align-items-center `}
      >
        <button className={style.btn}>تسجيل الدخول</button>
        <Link to="/create">قم بإنشاء حساب ؟ </Link>
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

export default LoginForm;

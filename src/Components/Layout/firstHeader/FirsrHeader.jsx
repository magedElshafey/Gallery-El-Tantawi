import React from "react";
import style from "./fHeader.module.css";
import { Link } from "react-router-dom";
const FirsrHeader = () => {
  return (
    <div className={`py-2 ${style.mainContainer}`}>
      <div className="container">
        <div className="d-flex align-items-center gap-4">
          <Link to="/login" className={style.headerLink}>
            تسجيل الدخول
          </Link>
          <Link to="/help" className={style.headerLink}>
            مركز المساعدة
          </Link>
          <Link to="/create" className={style.headerLink}>
            إنشاء حساب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirsrHeader;

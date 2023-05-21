import React from "react";
import style from "./more.module.css";
import { Link } from "react-router-dom";
const MoreBtn = ({ path }) => {
  return (
    <button className={style.btn}>
      <Link className={style.link} to={path}>
        مشاهدة المزيد
      </Link>
    </button>
  );
};

export default MoreBtn;

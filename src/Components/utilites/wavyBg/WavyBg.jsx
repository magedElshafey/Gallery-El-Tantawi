import React from "react";
import style from "./wavy.module.css";
const WavyBg = ({ title }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.banner}>
        <h2 className="fw-bolder fs-1 text-white">{title}</h2>
      </div>
      <div className={style.box}>
        <div className={style.singleBox}></div>
      </div>
    </div>
  );
};

export default WavyBg;

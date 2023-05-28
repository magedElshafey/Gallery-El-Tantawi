import React from "react";
import style from "../productDetails.module.css";
const MainImg = ({ mainImg, slider }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <div className={style.mainImgContainer}>
        <img alt="main/img" src={mainImg} className={style.mainImg} />
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {slider.map((item, index) => (
          <div key={index} className={style.subImgContainer}>
            <img
              src={item}
              alt="subImg"
              loading="lazy"
              className={style.subImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainImg;

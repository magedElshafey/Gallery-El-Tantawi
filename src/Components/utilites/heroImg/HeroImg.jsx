import React from "react";
import style from "./heroImg.module.css";
import { Link } from "react-router-dom";
const HeroImg = ({ path, img }) => {
  return (
    <div className="py-3">
      <Link
        to={path}
        className={`row justify-content-center  ${style.imgContainer}`}
      >
        <img
          loading="lazy"
          className={`col-12 ${style.mainImg}`}
          alt="hero/img"
          src={img}
        />
      </Link>
    </div>
  );
};

export default HeroImg;

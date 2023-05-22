import React from "react";
import style from "./heroImg.module.css";
import { Link } from "react-router-dom";
const HeroImg = ({ path, img }) => {
  return (
    <div className="container">
      <Link to={path} className={`row  ${style.imgContainer}`}>
        <img className={`col-12 ${style.mainImg}`} alt="hero/img" src={img} />
      </Link>
    </div>
  );
};

export default HeroImg;

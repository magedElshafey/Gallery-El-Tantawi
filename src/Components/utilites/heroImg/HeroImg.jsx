import React from "react";
import style from "./heroImg.module.css";
import { Link } from "react-router-dom";
const HeroImg = ({ path, img }) => {
  return (
    <div className="container py-5">
      <Link to={path} className={`row justify-content-center ${style.imgContainer}`}>
        <img className={`col-10 ${style.mainImg}`} alt="hero/img" src={img} />
      </Link>
    </div>
  );
};

export default HeroImg;

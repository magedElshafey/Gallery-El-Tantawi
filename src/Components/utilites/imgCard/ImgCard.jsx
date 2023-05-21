import React from "react";
import style from "./imgCard.module.css";
import { Link } from "react-router-dom";
const ImgCard = ({ title, img, path }) => {
  return (
    <div className={`p-3 ${style.mainCard}`}>
      <p className="fw-bold mb-2">{title}</p>
      <Link to={path}>
        <img alt="product/img" src={img} className={style.mainImg} />
      </Link>
    </div>
  );
};

export default ImgCard;

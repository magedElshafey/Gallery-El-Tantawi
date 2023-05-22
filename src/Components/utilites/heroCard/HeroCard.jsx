import React from "react";
import style from "./HeroCard.module.css";
import { Link } from "react-router-dom";
import MoreBtn from "../MoreBtn/MoreBtn";
const HeroCard = ({ title, path, data }) => {
  return (
    <div className="py-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="fw-bold fs-4">{title}</p>
        <MoreBtn path={path} />
      </div>
      <div className={`${style.mainContainer} row`}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center py-4 ${style.cardContainer}`}
          >
            <img
              loading="lazy"
              alt="product/img"
              src={item.img}
              className={style.mainImg}
            />
            <Link to={`/product/${item.id}`}>
              <p className={`text-black fw-bolder ${style.name}`}>
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;

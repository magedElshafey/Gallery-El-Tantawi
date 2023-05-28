import React from "react";
import style from "./OfferCard.module.css";
import { Link } from "react-router-dom";
const OfferCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${style.mainCard} col-12 col-md-4  mb-5 mb-md-0`}
        >
          <p className="fw-bold mb-3 p-2">{item.title}</p>
          <Link path={item.path}>
            <img
              loading="lazy"
              alt="offer/img"
              src={item.img}
              className={`${style.mainImg} img-fluid`}
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default OfferCard;

import React from "react";
import style from "./catcard.module.css";
import { Link } from "react-router-dom";
const CatCard = ({ data, title }) => {
  return (
    <div>
      <p className="fw-bold fs-3 mb-3 mt-0 p-0 text-center">{title}</p>
      <div
        className={` py-4 ${style.mainCard} d-flex justify-content-center  align-items-center gap-3 flex-wrap`}
      >
        {data.categories.map((item, index) => (
          <Link
            key={index}
            to={`/offers/${item.enTitle}`}
            className={`${style.cardContainer} d-flex flex-column align-items-center justify-content-center gap-3 p-2 `}
          >
            <img alt="category/img" src={item.img} className={style.mainImg} />
            <p className="p-0 m-0  fw-bold text-black">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatCard;

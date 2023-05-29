import React from "react";
import style from "../productDetails.module.css";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
const AddToCart = ({ id }) => {
  return (
    <div className="d-flex align-items-center gap-2 gap-md-3">
      <div className="d-flex">
        <div className={style.box}>
          <AiOutlineMinus className="pointer" />
        </div>
        <div className={style.box}>
          <p className="m-0 p-0">0</p>
        </div>
        <div className={style.box}>
          <AiOutlinePlus className="pointer" />
        </div>
      </div>
      <button className={style.addBtn}>أضف للعربة</button>
      <AiOutlineHeart
        size="30"
        className={`pointer text-black-50 ${style.heart}`}
      />
    </div>
  );
};

export default AddToCart;

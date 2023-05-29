import React from "react";
import style from "../cart.module.css";
import { useNavigate } from "react-router-dom";
const CartSubTotal = ({ items }) => {
  const navigate = useNavigate();
  const totalPrice = items.reduce((acc, product) => {
    acc += product.offer
      ? +product.originalPrice - +product.offer * product.quantity
      : product.originalPrice * product.quantity;
    return acc;
  }, 0);
  return (
    <div className={style.subTotalContainer}>
      <div className="p-2">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="m-0 p-0 fw-bold">إجمالي العربة : </p>
          <p className="m-0 p-0 fw-bold">{totalPrice} جنيه</p>
        </div>
        <button onClick={() => navigate("/checkout")} className={style.btn}>
          إستكمال الطلب
        </button>
      </div>
    </div>
  );
};

export default CartSubTotal;

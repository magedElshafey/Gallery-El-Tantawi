import React, { useState } from "react";
import style from "./filter.module.css";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
const ProductFilter = ({ setPrice, handleFilterClick }) => {
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div className={`${style.filterContainer}`}>
      <div className="p-3">
        <div className="d-flex align-items-center justify-content-between">
          <p className="p-0 m-0 fw-bold">السعر</p>
          {showPrice ? (
            <AiOutlineMinusCircle
              onClick={() => setShowPrice(false)}
              size={30}
              className={style.icon}
            />
          ) : (
            <BsPlusCircleDotted
              onClick={() => setShowPrice(true)}
              size={30}
              className={style.icon}
            />
          )}
        </div>
        {showPrice && (
          <div className="pt-4">
            <div className="mb-2">
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                onClick={handleFilterClick}
                className="d-inline-block mx-2"
                type="radio"
                id="less1000"
                name="price"
                value="less1000"
              />
              <label htmlFor="less1000">أقل من 1000</label>
            </div>
            <div className="mb-2">
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                onClick={handleFilterClick}
                className="d-inline-block mx-2"
                type="radio"
                id="more1000"
                name="price"
                value={"more1000"}
              />
              <label htmlFor="more1000">اكثر من 1000</label>
            </div>
            <div className="mb-2">
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                onClick={handleFilterClick}
                className="d-inline-block mx-2"
                type="radio"
                id="less10000"
                name="price"
                value="less10000"
              />
              <label htmlFor="less10000">أكثر من 1000 و أقل من 1000</label>
            </div>
            <div className="mb-2">
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                onClick={handleFilterClick}
                className="d-inline-block mx-2"
                type="radio"
                id="more10000"
                name="price"
                value="more10000"
              />
              <label htmlFor="more10000">أكثر من 10000</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;

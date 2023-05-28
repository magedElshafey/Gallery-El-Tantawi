import React, { useState } from "react";
import style from "./sheader.module.css";
import logo from "../../../assets/logo-ar.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
const SecondHeader = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className={`py-2 ${style.mainContainer}`}>
      <div className="container">
        <div className="d-none d-md-block">
          <div className="row align-items-center">
            <div className="col-2">
              <img src={logo} alt="logo/img" className={style.img} />
            </div>
            <div className="col-7 position-relative">
              <input
                type="text"
                className={style.inp}
                placeholder="إبحث في الموقع"
              />
              <div className={style.search}>
                <AiOutlineSearch size={30} />
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex justify-content-end gap-3 align-items-center text-black-50">
                <p className="m-0 p-0">مرحبا بك في جاليري الطنطاوي</p>
                <div className={`position-relative ${style.cartContainer}`}>
                  <AiOutlineShoppingCart
                    onClick={() => setOpenCart(true)}
                    className={style.cart}
                    size={30}
                  />
                  <span
                    onClick={() => setOpenCart(true)}
                    className={style.length}
                  >
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;

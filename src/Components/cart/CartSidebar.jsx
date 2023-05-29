import React, { useRef, useEffect } from "react";
import style from "./cart.module.css";
import { useDispatch } from "react-redux";
import { closeCart } from "../../Redux/cart";
import CartItems from "./cartItems/CartItems";
import EmptyCart from "./emptycart/EmptyCart";
import Cartcounter from "./cartCounter/Cartcounter";
import CartSubTotal from "./subTotal/CartSubTotal";
const CartSidebar = ({ cartItemsLength, openCart, cartItems }) => {
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(closeCart());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        ref={sidebarRef}
        className={`${style.mainContainer} p-3 ${
          openCart ? style.show : style.hide
        }`}
      >
        <div className="mb-5">
          <Cartcounter cartItems={cartItemsLength} />
        </div>
        {cartItemsLength ? <CartItems cartItems={cartItems} /> : <EmptyCart />}
        {cartItemsLength && <CartSubTotal items={cartItems} />}
      </div>
      <div
        className={`${style.overlay} ${openCart ? style.show : style.hide} `}
      ></div>
    </>
  );
};

export default CartSidebar;

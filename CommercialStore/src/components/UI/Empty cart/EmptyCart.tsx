import React from "react";
import s from "./EmptyCart.module.scss";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/images/empty-cart.png";

export default function EmptyCart() {
  return (
    <div className={s.emptyCart}>
      <div className={s.wrapper}>
        <div>
          <img src={emptyCart} alt="empty-cart" />
        </div>
        <div className={s.info}>
          <h2 className={s.title}>Your cart is empty.</h2>
          <p className={s.description}>Add something to make it happy!</p>
        </div>
        <Link to="/shop">
          <button className={s.btn}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

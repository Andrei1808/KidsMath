import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Cart.module.scss";
import Sidebar from "../components/SIdebar/Sidebar";
import { useAppSelector } from "../hooks/typedHooks";
import CartCard from "../components/UI/CartCard/CartCard";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <Helmet title="Cart">
      <main>
        <div className={s.wrapper}>
          <section className={s.path}>path</section>
          <Sidebar />
          <section className={s.products}>
            <div className={s.title}>
              <h5>product details</h5>
              <h5>price</h5>
              <h5>quantity</h5>
              <h5>shipping</h5>
              <h5>subtotal</h5>
              <h5>action</h5>
            </div>
            {cartItems.map((item, index) => {
              return <CartCard item={item} index={index} />;
            })}
          </section>
          <section className={s.totalPrice}>Total price Area</section>
        </div>
      </main>
    </Helmet>
  );
}

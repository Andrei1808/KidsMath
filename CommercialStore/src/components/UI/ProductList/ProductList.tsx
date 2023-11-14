import React from "react";
import { useProducts } from "../../../hooks/useProducts";
import Helmet from "../../Helmet/Helmet";
import s from "./ProductList.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = useProducts();
  return (
    <div>
      <Helmet title={"Shop"}>
        <section className={s.filters}></section>

        <section className={s.productsList}>
          {products.map((item) => {
            return (
              <div className={s.product} key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className={s.productDetails}>
                  <p>{item.title}</p>
                  <span className={s.price}>${item.price}</span>
                </div>
                <p className={s.brand}>{item.brand} Brand</p>
                <div className={s.buttonContainer}>
                  <button className={s.like}>
                    <MdFavoriteBorder />
                  </button>
                  <button className={s.cart}>
                    <FiShoppingCart />
                  </button>
                </div>
            </div>
            )
          })}
        </section>
      </Helmet>
    </div>
  );
}

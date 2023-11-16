import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/UI/ProductList/ProductList";
import s from "../style/pages/Shop.module.scss";

export default function Shop() {
  const products = useProducts();
  return (
    <Helmet title={"Shop"}>
      <div className={s.wrapper}>
        <section className={s.filters}>
          <div className={s.priceFilter}>
            <div id="rangeSlider">reerer</div>
          </div>
        </section>

        <ProductList />
      </div>
    </Helmet>
  );
}

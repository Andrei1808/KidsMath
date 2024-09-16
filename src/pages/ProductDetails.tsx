import React from "react";
import s from "../style/pages/ProductDetails.module.scss";

export default function ProductDetails() {
  return (
    <section className={s.wrapper}>
      <div className={s.productDetails}>
        <div className={s.image}>
          <img src="" alt="" />
        </div>
        <div className={s.info}>
          <p>PATH</p>
          <h2 className={s.title}></h2>
          <div className={s.rating}></div>
          <div className={s.comments}></div>
        </div>
      </div>
    </section>
  );
}

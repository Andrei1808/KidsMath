import React from "react";
import s from "./EmptyWishlist.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div className={s.emptyWishList}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <MdFavoriteBorder />
        </div>
        <div className={s.info}>
          <h2 className={s.title}>Your wishlist is empty.</h2>
          <p className={s.description}>
            You don’t have any products in the wishlist yet. You will find a lot
            <br />
            of interesting products on our Shop page.
          </p>
        </div>
        <Link to="/shop">
          <button className={s.btn}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

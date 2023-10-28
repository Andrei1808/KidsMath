import React from "react";
import s from "../style/pages/WishList.module.scss";
import Helmet from "../components/Helmet/Helmet";
import { IoMdClose } from "react-icons/io";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import { CarouselProps, wishListState } from "../interfaces/DataInterfaces";
import { useSelector } from "react-redux";

export default function WishList() {

  const wishListItems = useSelector((state: wishListState)=> state.wishList.wishListItems)
  return (
    <Helmet title="WishList">
      <>
      {wishListItems.map((item, index) => {
        <div>{item.id}</div>
      })}
        </>
      {/* <div className={s.wrapper}>
        <section className={s.path}>Path name</section>
        <section className={s.userPanel}>
          <div className={s.userName}>
            <h2>Hello Andrei</h2>
            <p>Welcome to your Account</p>
          </div>
          <ul className={s.navigate}>
            <li>My orders</li>
            <li>Wishlist</li>
            <li>My info</li>
            <li>Sign out</li>
          </ul>
        </section>
        <section className={s.wishList}>
          <h2>Wishlist</h2>
          <div className={s.products}>
           
            <div className={s.productItem}>
              <IoMdClose />
              <img src="" alt="" />
              <div className={s.productDesc}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div className={s.price}>{item.price}</div>
              <button>DDD</button>
            </div>
          </div>
        </section>
      </div> */}
    </Helmet>
  );
}

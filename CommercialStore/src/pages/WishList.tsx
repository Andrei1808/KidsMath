import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import s from "../style/pages/WishList.module.scss";
import { IoMdClose } from "react-icons/io";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function WishList() {
  const wishListItems = useAppSelector((state) => state.wishList.wishListItems);
  console.log(wishListItems);
  return (
    <Helmet title="WishList">
      <div className={s.wrapper}>
        <section className={s.path}>Path name</section>

        <section className={s.sidebar}>
          <div className={s.userName}>
            <h2>Hello Andrei</h2>
            <p>Welcome to your Account</p>
          </div>
          <ul className={s.navigate}>
            <li>
              <button>My orders</button>
            </li>
            <li>
              <button>Wishlist</button>
            </li>
            <li>
              <button>My info</button>
            </li>
            <li>
              <button>Sign out</button>
            </li>
          </ul>
        </section>

        <section className={s.wishList}>
          <h2>Wishlist</h2>
          <div className={s.products}>
            {wishListItems.length !== 0
              ? wishListItems.map((item, index) => {
                  return (
                    <div className={s.product}>
                      <button className={s.delete}>
                        <IoMdClose />
                      </button>
                      <img src={item.img} alt={item.name} />
                      <div className={s.productDesc}>
                        <p>{item.name}</p>
                        <p>
                          Price for one: <span>{item.price}$</span>
                        </p>
                        <p>
                          Quntity: <span>{item.quantity}</span>
                        </p>
                      </div>
                      <div className={s.price}>
                        Total price: <br />
                        <span>{item.totalPrice}$</span>
                      </div>
                      <button className={s.addBtn}>Add to cart</button>
                    </div>
                  );
                })
              : "Your wish list is empty!"}
          </div>
        </section>
      </div>
    </Helmet>
  );
}

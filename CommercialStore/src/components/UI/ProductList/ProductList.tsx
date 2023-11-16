import React, { useEffect, useState } from "react";
import { productInterface, useProducts } from "../../../hooks/useProducts";
import Helmet from "../../Helmet/Helmet";
import s from "./ProductList.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import Loader from "../../Loader/Loader";
import { useDispatch } from "react-redux";
import { wishListActions } from "../../../redux/slices/wishListSlice";

interface productData {
  products: productInterface[];
}

export default function ProductList({ products }: productData) {
  const dispatch = useDispatch();

  return (
    <Helmet title={"Shop"}>
      <div className={s.wrapper}>
        <div className={s.productsList}>
          {products ? (
            products.map((item) => {
              const addItemToFavorite = () => {
                dispatch(wishListActions.addItem(item));
              };

              return (
                <div className={s.product} key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <div className={s.productDetails}>
                    <p>{item.title}</p>
                    <span className={s.price}>${item.price}</span>
                  </div>
                  <p className={s.brand}>{item.brand} Brand</p>
                  <div className={s.buttonContainer}>
                    <button className={s.like} onClick={addItemToFavorite}>
                      <MdFavoriteBorder />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </Helmet>
  );
}

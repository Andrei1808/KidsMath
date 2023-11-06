import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import s from "./CartCard.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/cartSlice";
import { toast } from "react-toastify";

export interface cartCard {
  item: {
    id: number;
    title: string;
    img: string;
    price: number;
    quantity: number;
    totalPrice: number;
    size: string;
  };
  index: number;
}

export default function CartCard({ item }: cartCard, index: number) {

  const [size, setSize] = useState("L");

  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch(cartActions.increment(item))
  };

  const decrement = () => {
    dispatch(cartActions.decrement(item))
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(item));
    toast.success("Product removed from your cart");
  };

  return (
    <div className={s.product} key={index}>
      <div className={s.productInfo}>
        <img src={item.img} alt={item.title} />
        <div className={s.productDesc}>
          <h5 className={s.productName}>{item.title}</h5>
          <p className={s.productSize}>
            Size:{size}
            <span
              onClick={(e) => {
                setSize((e.target as HTMLButtonElement).value);
              }}
            >
              <button value="S">S</button>
              <button value="M">M</button>
              <button value="L">L</button>
              <button value="XL">XL</button>
              <button value="XXL">XXL</button>
            </span>
          </p>
        </div>
      </div>
      <div className={s.productPrice}>${item.price}</div>
      <div className={s.productQuantity}>
        <button onClick={decrement}>-</button>
        {item.quantity}
        <button onClick={increment}>+</button>
      </div>
      <div className={s.productShipping}>free</div>
      <div className={s.productSubtotal}>${item.totalPrice}</div>
      <button className={s.removeProduct} onClick={removeItem}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
}

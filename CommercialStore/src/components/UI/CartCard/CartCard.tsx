import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import s from "./CartCard.module.scss";

interface cartCard {
  item: {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
    totalPrice: number;
  };
  index: number;
}

export default function CartCard({ item }: cartCard, index: number) {

  const [quantity, setQuantity] = useState(item.quantity);
  const [totalPrice, setTotalPrice] = useState(item.totalPrice);

  const increment = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + item.price);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - item.price);
    }
  };

  return (
    <div className={s.product} key={index}>
      <div className={s.productInfo}>
        <img src={item.img} alt={item.name} />
        <div className={s.productDesc}>
          <h5 className={s.productName}>{item.name}</h5>
          <p className={s.productSize}>Size</p>
          <p className={s.productColor}>color</p>
        </div>
      </div>
      <div className={s.productPrice}>${item.price}</div>
      <div className={s.productQuantity}>
        <button onClick={decrement}>-</button>
        {quantity}
        <button onClick={increment}>+</button>
      </div>
      <div className={s.productShipping}>free</div>
      <div className={s.productSubtotal}>${totalPrice}</div>
      <button className={s.removeProduct}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
}

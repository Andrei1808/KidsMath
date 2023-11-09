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
  const [size, setSize] = useState('S');

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(cartActions.increment(item));
  };

  const decrement = () => {
    dispatch(cartActions.decrement(item));
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(item));
    toast.success("Product removed from your cart");
  };

  const selectSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
    dispatch(
      cartActions.setSize({
        ...item,
        size,
      })
    );
  };

  return (
    <div className={s.product} key={index}>
      <div className={s.productInfo}>
        <img src={item.img} alt={item.title} />
        <div className={s.productDesc}>
          <h5 className={s.productName}>{item.title}</h5>
          <div className={s.productSize}>
            Size:{size}
            <div className={s.sizeValue}>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="S"
                  checked={size === "S"}
                  onChange={selectSize}
                />
                S
              </label>

              <label>
                <input
                  type="radio"
                  name="size"
                  value="M"
                  checked={size === "M"}
                  onChange={selectSize}
                />
                M
              </label>

              <label>
                <input
                  type="radio"
                  name="size"
                  value="L"
                  checked={size === "L"}
                  onChange={selectSize}
                />
                L
              </label>

              <label>
                <input
                  type="radio"
                  name="size"
                  value="XL"
                  checked={size === "XL"}
                  onChange={selectSize}
                />
                XL
              </label>

              <label>
                <input
                  type="radio"
                  name="size"
                  value="XXL"
                  checked={size === "XXL"}
                  onChange={selectSize}
                />
                XXL
              </label>
            </div>
          </div>
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

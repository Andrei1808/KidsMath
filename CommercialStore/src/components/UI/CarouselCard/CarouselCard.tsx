import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { wishListActions } from "../../../redux/slices/wishListSlice";
import { MdFavoriteBorder } from "react-icons/md";
import s from "./CarouselCard.module.scss";
import { toast } from "react-toastify";
import { FiShoppingCart } from "react-icons/fi";
import { cartActions } from "../../../redux/slices/cartSlice";
import { productInterface } from "../../Carousel/Carousel";


export interface carouselCard {
  item: {
    id: number;
    title: string;
    brand: string;
    img: string;
    price: number;
    quantity: number;
    totalPrice: number;
  };
}

export interface ItemProps{
  item: productInterface;
}

export default function CarouselCard({ item }: carouselCard) {
  const dispatch = useDispatch();

  const addToWishList = () => {
    dispatch(wishListActions.addItem(item));
    toast.success("Product added successfully to your wish list");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        quantity: 1,
        totalPrice: item.price,
      })
    );

    toast.success("Product added successfully to your cart");
  };
  return item ? (
    <div className={s.carouselItem} key={item.id}>
      <img src={item.img} alt={item.title} />
      <div className={s.infoWrapper}>
        <p>{item.title}</p>
        <span className={s.price}>${item.price}</span>
      </div>
      <p className={s.brand}>{item.brand} Brand</p>
      <div className={s.buttonContainer}>
        <button className={s.like} onClick={addToWishList}>
          <MdFavoriteBorder />
        </button>
        <button className={s.cart} onClick={addToCart}>
          <FiShoppingCart />
        </button>
      </div>
    </div>
  ) : (
    "No item!"
  );
}

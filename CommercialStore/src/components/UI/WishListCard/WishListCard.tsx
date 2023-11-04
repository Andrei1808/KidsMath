import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { wishListActions } from "../../../redux/slices/wishListSlice";
import { MdFavoriteBorder } from "react-icons/md";
import s from "./WishListCard.module.scss";
import { ItemProps } from "../../../interfaces/DataInterfaces";
import { toast } from "react-toastify";
 
export default function WishListCardard({item}:ItemProps) {
  const dispatch = useDispatch();

  const addToWishList = () => {
    dispatch(
      wishListActions.addItem({
        id: item.id,
        name: item.title,
        price: item.price,
        img: item.img,
        quantity: 0,
        totalPrice: 0,
      })
    );
    
    toast.success('Product added successfully to your wish list');
  };
  return (
    item ?
    <div className={s.carouselItem} key={item.id}>
      <img src={item.img} alt={item.title} />
      <div className={s.infoWrapper}>
        <p>{item.title}</p>
        <span className={s.price}>${item.price}</span>
      </div>
      <p className={s.brand}>{item.price} Brand</p>
      <button className={s.like} onClick={addToWishList}>
        <MdFavoriteBorder />
      </button>
    </div> : 'No item!'
  );
}

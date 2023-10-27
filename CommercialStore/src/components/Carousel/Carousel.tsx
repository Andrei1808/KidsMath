import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../../hooks/useProducts";
import s from "./Carousel.module.scss";
import rightArrowImage from "../../assets/images/icons/arrow-right-line.png";
import leftArrowImage from "../../assets/images/icons/arrow-left-line.png";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  wishListActions, wishListProduct,
} from "../../redux/slices/wishListSlice";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: false,
    prevArrow: (
      <img src={leftArrowImage} alt="previous" className={s.customArrow} />
    ),
    nextArrow: (
      <img src={rightArrowImage} alt="next" className={s.customArrow} />
    ),
  };

  const dispatch = useDispatch();
  const products = useProducts();

  const addToWishList = (item: wishListProduct) => {
    dispatch(
      wishListActions.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        quantity: 0,
        totalPrice: 0,
      })
    );
  };



  return (
    <div className={s.slider}>
      <Slider {...settings}>
        {products.map((item) => {
          if (item.isNew === true) {
            return (
              <div className={s.carouselItem} key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className={s.infoWrapper}>
                  <p>{item.title}</p>
                  <span className={s.price}>${item.price}</span>
                </div>
                <p className={s.brand}>{item.brand} Brand</p>
                <span className={s.like} onClick={addToWishList}>
                  <MdFavoriteBorder />
                </span>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
}


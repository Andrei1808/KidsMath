import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Carousel.module.scss";
import rightArrowImage from "../../assets/images/icons/arrow-right-line.png";
import leftArrowImage from "../../assets/images/icons/arrow-left-line.png";
import { MdFavoriteBorder } from "react-icons/md";
import { CarouselProps } from "../../interfaces/DataInterfaces";
import ProductCard from "../UI/WishListCard/WishListCard";



export default function Carousel({products}: CarouselProps) {
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

  return (
    <div className={s.slider}>
      <Slider {...settings}>
        {products ? products.map((item) => {
          if (item.isNew === true) {
            return (
              <ProductCard item={item} key={item.id} />
            );
          }
        }) : "Wwww"}
      </Slider>
    </div>
  );
}

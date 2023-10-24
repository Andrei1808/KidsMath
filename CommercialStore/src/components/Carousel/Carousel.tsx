import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../../hooks/useProducts";
import s from "./Carousel.module.scss";
import rightArrowImage from "../../assets/images/icons/arrow-right-line.png";
import leftArrowImage from "../../assets/images/icons/arrow-left-line.png";
import {MdFavoriteBorder} from "react-icons/md"

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

  const products = useProducts();
  console.log(products);

  return (
    <div className={s.slider}>
      <Slider {...settings}>
        {products.map((product) => {
          if (product.isNew === true) {
            return (
              <div className={s.carouselItem} key={product.id}>
                <img src={product.img} alt={product.title} />
                <div className={s.infoWrapper}>
                  {" "}
                  <p>{product.title}</p>{" "}
                  <span className={s.price}>${product.price}</span>
                </div>
                <p className={s.brand}>{product.brand} Brand</p>
                <span className={s.like}>
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

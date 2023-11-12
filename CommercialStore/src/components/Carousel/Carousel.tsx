import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Carousel.module.scss";
import rightArrowImage from "../../assets/images/icons/arrow-right-line.png";
import leftArrowImage from "../../assets/images/icons/arrow-left-line.png";
import CarouselCard from "../UI/CarouselCard/CarouselCard";

export interface productInterface {
  id: number;
  price: number;
  title: string;
  description: string;
  img: string;
  brand: string;
  isNew: boolean;
  category: string;
  totalPrice: number;
  quantity: number;
  size: string;
}

interface SlickButtonFix {
  children: JSX.Element;
  slideCount?: number;
  currentSlide?: number;
}

export interface carouselInterface {
  products: productInterface[];
}

export default function Carousel({ products }: carouselInterface) {

  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...props
  }: SlickButtonFix) => <span {...props}>{children}</span>;
  
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
      <SlickButtonFix>
        <img src={leftArrowImage} alt="previous" className={s.customArrow} />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <img src={rightArrowImage} alt="next" className={s.customArrow} />
      </SlickButtonFix>
    ),
  };

  const renderCarouselCards = () => {
    return products
      .filter((item) => item.isNew)
      .map((item) => <CarouselCard item={item} key={item.id} />);
  };

  return (
    <div className={s.slider}>
      <Slider {...settings}>{renderCarouselCards()}</Slider>
    </div>
  );
}

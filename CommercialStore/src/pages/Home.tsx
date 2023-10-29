import React from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Home.module.scss";
import { Link } from "react-router-dom";

import SubHeroCard from "../components/SubHeroCard/SubHeroCard";
import Carousel from "../components/Carousel/Carousel";

import {
  categoriesFoWomen,
  categoriesForMen,
  heroData,
} from "../assets/data/staticData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BigSavingZone from "../components/BigSavingZone/BigSavingZone";
import CategoriesMen from "../components/Categories/Categories";

import nike from "../assets/images/imagesHome/brand-icon/nike.png";
import hm from "../assets/images/imagesHome/brand-icon/hm.png";
import levis from "../assets/images/imagesHome/brand-icon/levis.png";
import polo from "../assets/images/imagesHome/brand-icon/polo.png";
import puma from "../assets/images/imagesHome/brand-icon/puma.png";
import { useProducts } from "../hooks/useProducts";

export default function Home() {

  const products = useProducts();
  
  return (
    <div>
      <Helmet title={"Home"}>
        <section className={s.heroSection}>
          <div className={s.heroContent}>
            <div className={s.heroWrapper}>
              <div className={s.heroSubtitle}>
                <p className={s.description}>T-shirt / Tops</p>
                <h2 className={s.title}>
                  Summer
                  <br /> Value Pack
                </h2>
                <p className={s.description}>cool / colorful / comfy</p>
              </div>
              <div className={s.btnWrapper}>
                <button className={s.heroBtn}>
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={s.subHeroSection}>
          <div className={s.subHeroSectionContent}>
            {heroData.map((el) => (
              <SubHeroCard data={el} key={el.id} />
            ))}
          </div>
        </section>

        <section className={s.newArrival}>
          <h2 className={s.sectionTitle}>New Arrival</h2>
          <Carousel products={products} />
        </section>

        <section className={s.bigSavingZone}>
          <h2 className={s.sectionTitle}>Big Saving Zone</h2>
          <BigSavingZone />
        </section>

        <section className={s.categoriesForMen}>
          <h2 className={s.sectionTitle}>Categories For Men</h2>
          <div className={s.categoriesWrapper}>
            {categoriesForMen.map((el) => (
              <CategoriesMen data={el} key={el.id} />
            ))}
          </div>
        </section>

        <section className={s.categoriesForWomen}>
          <h2 className={s.sectionTitle}>Categories For Men</h2>
          <div className={s.categoriesWrapper}>
            {categoriesFoWomen.map((el) => (
              <CategoriesMen data={el} key={el.id} />
            ))}
          </div>
          <div className={s.brands}>
            <div className={s.brandsContent}>
              <h2>top brands deal</h2>
              <p>
                Up To <span>60%</span> off on brands
              </p>
              <div className={s.brandsContainer}>
                <div className={s.brand}>
                  <Link to='https://www.nike.com' target="_blank"> <img src={nike} alt="brand-nike" /></Link>
                </div>
                <div className={s.brand}>
                <Link to='https://www.hm.com' target="_blank"><img src={hm} alt="brand-hm" /></Link>
                </div>
                <div className={s.brand}>
                   <Link to='https://www.levis.com' target="_blank"><img src={levis} alt="brand-levis" /></Link>
                </div>
                <div className={s.brand}>
                   <Link to='https://www.polo.com' target="_blank"><img src={polo} alt="brand-polo" /></Link>
                </div>
                <div className={s.brand}>
                   <Link to='https://www.puma.com' target="_blank"><img src={puma} alt="brand-puma" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </div>
  );
}

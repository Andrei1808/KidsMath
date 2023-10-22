import React from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Home.module.scss";
import { Link } from "react-router-dom";
import SubHeroCard from "../components/SubHeroCard/SubHeroCard";
import { categoriesForMen, heroData } from "../assets/data/staticData";
import Carousel from "../components/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigSavingZone from "../components/BigSavingZone/BigSavingZone";
import CategoriesMen from "../components/CategoriesMen/CategoriesMen";

export default function Home() {
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
          <Carousel />
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
      </Helmet>
    </div>
  );
}

import React from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Home.module.scss";
import { Link } from "react-router-dom";
import SubHeroCard from "../components/UI/SubHeroCard/SubHeroCard";
import { staticData } from "../assets/data/staticData";
import Carousel from "../components/Slider/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            {staticData.map((el) => (
              <SubHeroCard data={el} key={el.id} />
            ))}
          </div>
        </section>

        <section className={s.newArrival}>
          <h2 className={s.sectionTitle}>New Arrival</h2>
          <Carousel/>
        </section>

        <section className={s.bigSavingZone}>
        <h2 className={s.sectionTitle}>Big Saving Zone</h2>
        </section>
      </Helmet>
    </div>
  );
}

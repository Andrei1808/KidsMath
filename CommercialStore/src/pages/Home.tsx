import React from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Helmet title={"Home"}>
        <section className={s.heroSection}>
          <div className={s.heroContent}>
            <div className={s.heroWrapper}>
              <div className={s.heroSubtitle}>
                <p className={s.description}>T-shirt / Tops</p>
                <h2 className={s.title}>Summer<br/> Value Pack</h2>
                <p className={s.description}>cool / colorful / comfy</p>
              </div>
              <div className={s.btnWrapper}>
                <button className={s.heroBtn}><Link to='/shop'>Shop Now</Link></button>
              </div>
            </div>
          </div> 
        </section>

        <section className={s.subHeroSection}>
          <div className={s.subHeroSectionContent}>
          <div className={s.subHeroWrapper}>
              <div className={s.subHeroSubtitle}>
                <p className={s.subHeroDescription}>T-shirt / Tops</p>
                <h2 className={s.subHeroTitle}>Summer<br/> Value Pack</h2>
                <p className={s.subHeroDescription}>cool / colorful / comfy</p>
              </div>
              <div className={s.subHeroBtnWrapper}>
               <Link to='/shop' className={s.subHeroHeroBtn}>Explore Items</Link>
              </div>
            </div>

            <div className={s.subHeroWrapper}>
              <div className={s.subHeroSubtitle}>
                <p className={s.subHeroDescription}>T-shirt / Tops</p>
                <h2 className={s.subHeroTitle}>Summer<br/> Value Pack</h2>
                <p className={s.subHeroDescription}>cool / colorful / comfy</p>
              </div>
              <div className={s.subHeroBtnWrapper}>
               <Link to='/shop' className={s.subHeroHeroBtn}>Explore Items</Link>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </div>
  );
}

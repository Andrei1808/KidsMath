import React from "react";
import s from "./SubHeroCard.module.scss";
import { Link } from "react-router-dom";
import { staticDataCardInterface } from "../../interfaces/DataInterfaces";


export default function SubHeroCard({ data }: staticDataCardInterface) {
  const { title, description, offer, img } = data;
  return (
    <div className={s.subHeroWrapper}>
      <div className={s.subHeroSubtitle}>
        <img src={img} alt={description} className={s.subHeroImg} />
        <div className={s.subHeroContent}>
          <p className={s.subHeroTitle}>{title}</p>
          <h2 className={s.subHeroDescription}>{description}</h2>
          <p className={s.subHeroOffer}>{offer}</p>
          <Link to="/shop" className={s.subHeroBtn}>
            Explore Items
          </Link>
        </div>
      </div>
    </div>
  );
}

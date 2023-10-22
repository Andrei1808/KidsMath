import React from "react";
import { bigSavingZoneData } from "../../assets/data/staticData";
import { cardsInterface } from "../../interfaces/DataInterfaces";
import s from "./BigSavingZone.module.scss";
import clsx from "clsx";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";
import fashion1 from "../../assets/images/imagesHome/fashion1.png";
import fashion2 from "../../assets/images/imagesHome/fashion2.png";

export default function BigSavingZone() {
  return (
    <div className={s.bigSavingZone}>
      {bigSavingZoneData.map((elem: cardsInterface) => {
        return (
          <div className={s.card} key={elem.id}>
            <img src={elem.img} alt={elem.title} />
            <div
              className={clsx(s.content, {
                [s.light]: elem.theme === "light",
                [s.leftPosition]: elem.contentPosition === "left",
              })}
            >
              <div
                className={clsx(s.info, {
                  [s.infoRight]: elem.limited === true,
                })}
              >
                {elem.limited ? (
                  <div className={s.limited}>limited stock</div>
                ) : (
                  ""
                )}
                <h2 className={s.title}>{elem.title}</h2>
                <p className={s.description}>{elem.description}</p>
                <p className={s.offer}>{elem.offer}</p>
              </div>
              <div className={s.arrow}>
                <GoArrowDown />
              </div>
              <button
                className={clsx(s.button, {
                  [s.buttonLight]: elem.theme === "light",
                })}
              >
                <Link to="/shop">shop now</Link>
              </button>
            </div>
          </div>
        );
      })}
      <div className={s.fashion}>
        <div className={s.container}>
          <div className={s.fashionItem}>
            <img src={fashion1} alt="fashion1" />
            <div className={s.fashionContent}>
              <h2>we made your everyday fashion better!</h2>
              <p>
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </p>
              <button className={s.button}>
                {" "}
                <Link to="/shop">shop now</Link>
              </button>
            </div>
          </div>
          <div className={s.fashionItem}>
            <img src={fashion2} alt="fashion1" />
          </div>
        </div>
      </div>
    </div>
  );
}

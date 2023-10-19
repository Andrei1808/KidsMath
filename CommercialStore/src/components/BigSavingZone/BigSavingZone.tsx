import React from "react";
import { bigSavingZoneData } from "../../assets/data/staticData";
import { cardsInterface } from "../../interfaces/DataInterfaces";
import s from "./BigSavingZone.module.scss";
import clsx from "clsx";

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
              })}
            >
              {elem.limited ? <div className={s.limit}>limited stock</div> : ""}
              <h2 className={s.title}>{elem.title}</h2>
              <p className={s.description}>{elem.description}</p>
                    <p className={s.offer}>{elem.offer}</p>
              <div className={s.button}>
                <button>shop now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import s from "./CategoriesMen.module.scss";
import { staticDataCardInterface } from "../../interfaces/DataInterfaces";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CategoriesMen({ data }: staticDataCardInterface) {
  const { title, img } = data;
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={img} alt={title} />
      </div>
      <div className={s.info}>
        <div className={s.content}>
          <h4 className={s.title}>{title}</h4>
          <p className={s.subTitle}>explore now!</p>
        </div>
        <button>
          <Link to="/shop">
            <BsArrowRight />
          </Link>
        </button>
      </div>
    </div>
  );
}

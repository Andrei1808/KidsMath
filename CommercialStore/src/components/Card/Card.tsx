import s from "./Card.module.scss";
import "firebase/compat/database";

export default function Card({data}) {
  console.log(data);
  const { title, img, brand, price } = data;

  return (
    <div className={s.container}>
      <div className={s.image}>
        <img className={s.imageItem} src={data[0].img} alt="" />
      </div>
      <div className={s.description}>
        <div className={s.productInfo}>
          <div className={s.title}>{title}</div>
          <div className={s.brand}>{brand}</div>
        </div>
        <div security={s.price}>{price}$</div>
      </div>
    </div>
  );
}

import s from "./Page404.module.scss";
import { Link } from "react-router-dom";
import page404 from "../../../assets/images/error-page.png";

export default function Page404() {
  return (
    <div className={s.page404}>
      <div className={s.wrapper}>
        <div>
          <img src={page404} alt="empty-cart" />
        </div>
        <div className={s.info}>
          <h2 className={s.title}>Oops! Page not found.</h2>
          <p className={s.description}>
            The page you are looking for might have been removed or <br />
            temporarily unavailable.
          </p>
        </div>
        <Link to="/home">
          <button className={s.btn}>Back to HomePage</button>
        </Link>
      </div>
    </div>
  );
}

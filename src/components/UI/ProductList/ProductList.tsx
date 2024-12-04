import { productInterface } from "../../../hooks/useProducts";
import s from "./ProductList.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { wishListActions } from "../../../redux/slices/wishListSlice";
import { userActions } from "../../../redux/slices/userSlice";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface productData {
  products: productInterface[];
}

export default function ProductList({ products }: productData) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
      <div className={s.wrapper}>
        <div className={s.productsList}>
          {products.length ? (
            
            products.map((item) => {
              const addItemToFavorite = () => {
                if (isAuth) {
                  dispatch(wishListActions.addItem(item));
                } else {
                  dispatch(userActions.previousUrl({
                    previousUrl:true, }
                  ))
                  navigate("/login");
                }
              };

              return (
                <div className={s.product} key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <div className={s.productDetails}>
                    <p>{item.title}</p>
                    <span className={s.price}>${item.price}</span>
                  </div>
                  <p className={s.brand}>{item.brand} Brand</p>
                  <div className={s.buttonContainer}>
                    <button className={s.like} onClick={addItemToFavorite}>
                      <MdFavoriteBorder />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
           <div>No matches!</div>
          )}
        </div>
      </div>
  );
}

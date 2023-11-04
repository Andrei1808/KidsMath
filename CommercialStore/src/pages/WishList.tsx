import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import s from "../style/pages/WishList.module.scss";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../components/SIdebar/Sidebar";
import EmptyWishlist from "../components/UI/Empty wishlist/EmptyWishlist";
import { wishListActions } from "../redux/slices/wishListSlice";
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function WishList() {
  const dispatch = useDispatch();
  const wishListItems = useAppSelector((state) => state.wishList.wishListItems);

  return (
    <Helmet title="WishList">
      <div className={s.wrapper}>
        <section className={s.path}>Path name</section>

        <Sidebar />

        <section className={s.wishList}>
          <h2>Wishlist</h2>
          <div className={s.products}>
            {wishListItems.length !== 0 ? (
              wishListItems.map((item, index) => {
                
                const removeFromWishList = () => {
                  dispatch(wishListActions.removeItem(item.id));
                  toast.success("Product removed from your wish list");
                };

                const addToCart = () => {
                  dispatch(cartActions.addItem(item));
                  dispatch(wishListActions.removeItem(item.id));
                  toast.success("Product add to your cart");
                };
                return (
                  <div className={s.product} key={index}>
                    <button className={s.delete} onClick={removeFromWishList}>
                      <IoMdClose />
                    </button>
                    <img src={item.img} alt={item.title} />
                    <div className={s.productDesc}>
                      <p>{item.title}</p>
                      <p>
                        Price for one: <span>{item.price}$</span>
                      </p>
                      <p>
                        Quntity: <span>{item.quantity}</span>
                      </p>
                    </div>
                    <div className={s.price}>
                      Total price: <br />
                      <span>{item.totalPrice}$</span>
                    </div>
                    <button className={s.addBtn} onClick={addToCart}>
                      Add to cart
                    </button>
                  </div>
                );
              })
            ) : (
              <EmptyWishlist />
            )}
          </div>
        </section>
      </div>
    </Helmet>
  );
}

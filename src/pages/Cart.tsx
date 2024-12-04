import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Cart.module.scss";
import Sidebar from "../components/SIdebar/Sidebar";
import { useAppSelector } from "../hooks/typedHooks";
import CartCard from "../components/UI/CartCard/CartCard";
import { Link } from "react-router-dom";
import EmptyCart from "../components/UI/Empty cart/EmptyCart";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <div className={s.wrapper}>
        <section className={s.path}>path</section>
        <Sidebar />

        {cartItems.length ? (
          <section className={s.cart}>
            <h2>Cart</h2>
            <section className={s.login}>
            <p>
                Please fill in the fields below and click place order to
                complete your purchase!
                <br />
                Already registered? <Link to="/login">Please login here</Link>
              </p>
            </section>
            <div className={s.products}>
              <div className={s.title}>
                <h5>product details</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>shipping</h5>
                <h5>subtotal</h5>
                <h5>action</h5>
              </div>
              {cartItems.map((item, index) => {
                return <CartCard item={item} index={index} key={item.id} />;
              })}
            </div>
            <div className={s.totalPriceInfo}>
              <div className={s.discount}>
                <h2>Discount Codes</h2>
                <p>Enter your coupon code if you have one</p>
                <div className={s.couponField}>
                  <input type="text" />
                  <button>Apply Coupon</button>
                </div>
                <Link to="/shop">
                  <button className={s.shoppingBtn}>Continue Shopping</button>
                </Link>
              </div>
              <div className={s.totalPrice}>
                <div className={s.priceInfo}>
                  <p>Sub Total: ${totalAmount} </p>
                  <p>Shipping: $</p>
                  <p className={s.grandTotal}>Grand Total: $</p>
                </div>
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </section>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Helmet>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import logo from "../../assets/images/header-logo.png";
import searchIcon from "../../assets/images/icons/search-icon.png";
import { useAppSelector } from "../../hooks/typedHooks";
import { clsx } from "clsx";

export default function Header() {
  const totaWishListProducts = useAppSelector((state) => state.wishList.totalProducts);
  const totCartProducts = useAppSelector((state) => state.cart.totalProducts);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <img src={logo} alt="logo-header" />
        </div>

        <div className={s.navigation}>
          <ul className={s.menu}>
            <li className={s.navItem}>
              <NavLink to="home">Home</NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="cart">Cart</NavLink>
            </li>
          </ul>
        </div>

        <div className={s.search}>
          <span className={s.searchIcon}>
            <img src={searchIcon} alt="search-icon" />
          </span>
          <input type="text" className={s.searchInput} placeholder="Search" />
        </div>

        <div className={s.icons}>
          <Link to="/wishlist">
            <span className={s.wishlist}>
              <MdFavoriteBorder />
              {totaWishListProducts > 0 ? (
                <span className={s.counter}>{totaWishListProducts}</span>
              ) : (
                ""
              )}
            </span>
          </Link>
          <span className={s.user}>
            <AiOutlineUser />
          </span>
          <Link to="/cart">
            <span className={s.cart}>
            <FiShoppingCart />
              {totCartProducts > 0 ? (
                <span className={s.counter}>{totCartProducts}</span>
              ) : (
                ""
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

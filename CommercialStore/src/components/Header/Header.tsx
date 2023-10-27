import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import logo from "../../assets/images/header-logo.png";
import searchIcon from "../../assets/images/icons/search-icon.png";

export default function Header() {
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
          <span className={s.wishlist}>
            <Link to="/wishlist" >
              <MdFavoriteBorder />
            </Link>
          </span>
          <span className={s.user}>
            <AiOutlineUser />
          </span>
          <span className={s.cart}>
            <FiShoppingCart />
          </span>
        </div>
      </div>
    </header>
  );
}

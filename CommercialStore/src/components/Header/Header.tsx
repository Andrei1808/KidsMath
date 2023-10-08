import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "../../images/header-logo.png";
import searchIcon from "../../images/icons/search-icon.png";
import favoriteIcon from "../../images/icons/fav-icon.png";
import userIcon from "../../images/icons/user-icon.png";
import cartIcon from "../../images/icons/cart-icon.png";
import { motion } from "framer-motion";

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
          <span className={s.favorite}>
            <img src={favoriteIcon} alt="search-icon" />
          </span>
          <span className={s.user}>
            <img src={userIcon} alt="search-icon" />
          </span>
          <span  className={s.cart}>
            <img src={cartIcon} alt="search-icon" />
          </span>
        </div>
      </div>
    </header>
  );
}

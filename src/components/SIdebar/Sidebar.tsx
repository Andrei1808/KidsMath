import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { PiHandbagSimple, PiSignOut } from "react-icons/pi";
import s from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(userActions.removeUser());
  };

  return (
    <section className={s.sidebar}>
      <div className={s.userName}>
        {isAuth ? <h2>Hello { email }</h2> : <h2>Hello guest</h2>}
        
        <p>Welcome to your Account</p>
      </div>
      <ul className={s.navigate}>
        <li
          className={clsx({
            [s.active]: path === "/cart",
          })}
        >
          <button>
            <Link to="/cart">
              <p className={s.navigateItem}>
                <span>
                  <PiHandbagSimple />
                </span>
                My orders
              </p>
            </Link>
          </button>
        </li>
        <li
          className={clsx({
            [s.active]: path === "/wishlist",
          })}
        >
          <button>
            <Link to="/wishlist">
              <p className={s.navigateItem}>
                <span>
                  <MdFavoriteBorder />
                </span>
                Wishlist
              </p>{" "}
            </Link>
          </button>
        </li>
        <li
          className={clsx({
            [s.active]: path === "/info",
          })}
        >
          <button>
            <Link to="/cart">
              <p className={s.navigateItem}>
                <span>
                  <AiOutlineUser />
                </span>
                My info
              </p>
            </Link>
          </button>
        </li>
        <li>
          <button onClick={signOut}>
            <p className={s.navigateItem}>
              <span>
                <PiSignOut />
              </span>
              Sign out
            </p>
          </button>
        </li>
      </ul>
    </section>
  );
}

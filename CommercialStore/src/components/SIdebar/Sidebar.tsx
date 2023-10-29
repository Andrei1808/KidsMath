import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { PiHandbagSimple, PiSignOut } from "react-icons/pi";
import s from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <section className={s.sidebar}>
      <div className={s.userName}>
        <h2>Hello Andrei</h2>
        <p>Welcome to your Account</p>
      </div>
      <ul className={s.navigate}>
        <li>
          <button>
            <p className={s.navigateItem}>
              <span>
                <PiHandbagSimple />
              </span>
              My orders
            </p>
          </button>
        </li>
        <li>
          <button>
            <p className={s.navigateItem}>
              <span>
                <MdFavoriteBorder />
              </span>
              Wishlist
            </p>
          </button>
        </li>
        <li>
          <button>
            <p className={s.navigateItem}>
              <span>
                <AiOutlineUser />
              </span>
              My info
            </p>
          </button>
        </li>
        <li>
          <button>
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

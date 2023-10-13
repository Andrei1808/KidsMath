import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/icons/facebook.png";
import instagram from "../../assets/images/icons/instagram.png";
import twitter from "../../assets/images/icons/twitter.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import googleApp from "../../assets/images/icons/google-app.png";
import appStore from "../../assets/images/icons/app-store.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <section className={s.quickLinks}>
          <div className={s.help}>
            <h1 className={s.title}>Need Help</h1>
            <ul className={s.listGroup}>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Track Order</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Returns & Refunds</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>FAQ's</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Career</Link>
              </li>
            </ul>
          </div>

          <div className={s.company}>
            <h1 className={s.title}>Company</h1>
            <ul className={s.listGroup}>
              <li className={s.listGroupItem}>
                <Link to={"/"}>About Us</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Euphoria Blog</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Euphoriastan</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Collaboration</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Media</Link>
              </li>
            </ul>
          </div>

          <div className={s.info}>
            <h1 className={s.title}>More Info</h1>
            <ul className={s.listGroup}>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Term and Conditions</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Privacy Policy</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Shipping Policy</Link>
              </li>
              <li className={s.listGroupItem}>
                <Link to={"/"}>Sitemap</Link>
              </li>
            </ul>
          </div>

          <div className={s.location}>
            <h1 className={s.title}>Location</h1>
            <p className={s.text}>
              <Link to="mailto:support@euphoria.in"> support@euphoria.in</Link>
            </p>
            <p className={s.text}>Eklingpura Chouraha, Ahmedabad Main Road</p>
            <p className={s.text}>
              (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
            </p>
          </div>
        </section>

        <section className={s.socialLinks}>
          <div className={s.social}>
            <ul className={s.listGroupSocial}>
              <li className={s.icons}>
                <Link to={"https://www.facebook.com"}>
                  <img src={facebook} alt="facebook-icon" />
                </Link>
              </li>
              <li className={s.icons}>
                <Link to={"https://www.instagram.com"}>
                  <img src={instagram} alt="instagram-icon" />
                </Link>
              </li>
              <li className={s.icons}>
                <Link to={"https://www.twitter.com"}>
                  <img src={twitter} alt="twitter-icon" />
                </Link>
              </li>
              <li className={s.icons}>
                <Link to={"https://www.linkedin.com"}>
                  <img src={linkedin} alt="linkedin-icon" />
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.network}>
            <h1 className={s.title}>Download The App </h1>
            <ul className={s.listGroupNetwork}>
              <li className={s.icons}>
                <Link to={"https://www.googleplay.com"}>
                  <img src={googleApp} alt="googleApp-icon" />
                  <div>
                    <h6>Android app on</h6>
                    <h4>Google Play</h4>
                  </div>
                </Link>
              </li>
              <li className={s.icons}>
                <Link to={"https://www.appstore.com"}>
                  <img src={appStore} alt="appStore-icon" />
                  <div>
                    <h6>Available on the</h6>
                    <h4>App Store</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className={s.copyright}>
          <p className={s.copyrightText}>
            Copyright {year} developed by Andrei Kaliarovich
          </p>
        </section>
      </div>
    </footer>
  );
}

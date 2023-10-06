import React from "react";
import Helmet from "../components/Helmet/Helmet";
import s from "../style/pages/Home.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Helmet title={"Home"}>
        <section className={s.heroSection}>
          <div className={s.heroContent}>
            <div className={s.heroWrapper}>
              <div className={s.heroSubtitle}>
                <p className={s.description}>T-shirt / Tops</p>
                <h2 className={s.title}>Summer<br/> Value Pack</h2>
                <p className={s.description}>cool / colorful / comfy</p>
              </div>
              <div className={s.btnWrapper}>
                <motion.button  whileHover={{ scale: 1.1 }} className={s.heroBtn}><Link to='/shop'>Shop Now</Link></motion.button>
              </div>
            </div>
          </div> 
        </section>
      </Helmet>
    </div>
  );
}

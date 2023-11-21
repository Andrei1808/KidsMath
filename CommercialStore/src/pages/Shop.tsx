import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/UI/ProductList/ProductList";
import s from "../style/pages/Shop.module.scss";
import Loader from "../components/Loader/Loader";

import { DoubleRange } from "../components/DoubleRange/DoubleRange";

export default function Shop() {
  const products = useProducts();

  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const categoryHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryValue = e.target.value;

    setSelectedCategory(categoryValue);

    if (categoryValue === "new") {
      const filteredProducts = products.filter((item) => item.isNew === true);
      setProductsData(filteredProducts);
      setIsInitialLoad(true);
    }

    if (categoryValue === "all" && isInitialLoad) {
      setProductsData(products);
    }
  };

  const priceHandle = (newValue: number[]) => {
    const filteredProducts = products.filter(
      (item) => newValue[0] <= item.price && item.price <= newValue[1]
    );
    setProductsData(filteredProducts);
    
  };

  useEffect(() => {
    if (products.length > 0) {
      setLoading(true);
      setProductsData(products);
    }
  }, [products]);

  return (
    <Helmet title={"Shop"}>
      {loading ? (
        <div className={s.wrapper}>
          <section className={s.filters}>
            <DoubleRange onChange={priceHandle} selectedCategory={selectedCategory} />
          </section>

          <div className={s.category}>
            <label className={selectedCategory === "new" ? s.active : ""}>
              <input
                type="radio"
                name="category"
                value="new"
                onChange={categoryHandle}
              />
              New
            </label>

            <label className={selectedCategory === "all" ? s.active : ""}>
              <input
                type="radio"
                name="category"
                value="all"
                onChange={categoryHandle}
              />
              All products
            </label>
          </div>

          <ProductList products={productsData} />

          <section className={s.shopDescr}>
            <h2 className={s.sectionTitle}>
              Why you should choise our online store?
            </h2>
            <p className={s.descr}>
              Welcome to the world of stylish shopping – welcome to Euohoria
              online store! We've created this unique store with love for style,
              beauty, and convenience to make your shopping experience
              unforgettable. Euohoria is not just a store; it's a guide to the
              world of fashion and beauty. We take pride in offering our
              customers a curated selection of the best products from leading
              global brands. Here, you'll find everything you need to create
              your stylish look, whether it's everyday clothing, accessories, or
              beauty products. Our virtual shelves are filled with only the
              finest offers, and we guarantee that every purchase will bring you
              joy. Navigating the Euohoria website is easy and intuitive,
              providing you with convenience when choosing products and placing
              orders. Every detail of our store is designed with your comfort in
              mind. We provide detailed product descriptions, size information,
              and high-quality images so you can make informed choices. We also
              offer secure payment systems and efficient delivery services to
              ensure your order is processed and delivered as quickly as
              possible. Euohoria is not just a store; it's a community of
              like-minded individuals who love beauty and style. Join us on
              social media to stay updated on the latest trends, exclusive
              offers, and inspiring style stories. Immerse yourself in the
              fascinating world of Euohoria, where beauty is in every detail. We
              invite you to enjoy the perfect online shopping experience at
              Euohoria. Your style is our priority!
            </p>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </Helmet>
  );
}

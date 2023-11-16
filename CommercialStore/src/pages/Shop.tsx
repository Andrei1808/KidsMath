import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/UI/ProductList/ProductList";
import s from "../style/pages/Shop.module.scss";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader/Loader";

export default function Shop() {
  const products = useProducts();

  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryValue = e.target.value;

    setSelectedCategory(categoryValue);

    if (categoryValue === "new") {
      const filteredProducts = products.filter((item) => item.isNew === true);
      setProductsData(filteredProducts);
    }

    if (categoryValue === "all") {
      setProductsData(products);
    }
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
            <div className={s.priceFilter}>
              <div id="rangeSlider">reerer</div>
            </div>
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
        </div>
      ) : (
        <Loader />
      )}
    </Helmet>
  );
}

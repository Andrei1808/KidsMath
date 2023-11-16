import React, { useEffect, useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import Helmet from "../../Helmet/Helmet";
import s from "./ProductList.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import Loader from "../../Loader/Loader";
import { useDispatch } from "react-redux";
import { wishListActions } from "../../../redux/slices/wishListSlice";

export default function ProductList() {
  const products = useProducts();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryValue = e.target.value

    setSelectedCategory(categoryValue);

    if (categoryValue === "new") {
      const filteredProducts = products.filter(item => item.isNew === true )
      setProductsData(filteredProducts);
    }

    if (categoryValue === "all") {
      setProductsData(products);
    }
      
  }

  useEffect(() => {
    if (products.length > 0) {
      setLoading(true);
      setProductsData(products);
    }
  }, [products]); 


  return (
    <Helmet title={"Shop"}>
      <div className={s.wrapper}>
        <div className={s.category} >
          <label className={selectedCategory === 'new' ? s.active : ''} >
            <input type="radio" name="category" value="new" onChange={categoryHandle}/>
            New
          </label>

          <label className={selectedCategory === 'all' ? s.active : ''} >
            <input type="radio" name="category" value="all" onChange={categoryHandle}/>
            All products
          </label>
        </div>
        <div className={s.productsList}>

          {loading ? (
            productsData.map((item) => {

              const addItemToFavorite = () => {
                dispatch(wishListActions.addItem(item))
              }

              return (
                <div className={s.product} key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <div className={s.productDetails}>
                    <p>{item.title}</p>
                    <span className={s.price}>${item.price}</span>
                  </div>
                  <p className={s.brand}>{item.brand} Brand</p>
                  <div className={s.buttonContainer}>
                    <button className={s.like} onClick={addItemToFavorite}>
                      <MdFavoriteBorder />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </Helmet>
  );
}

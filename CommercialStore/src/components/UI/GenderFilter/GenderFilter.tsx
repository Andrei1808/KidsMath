import React, { useState } from "react";
import s from "./GenderFilter.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAppSelector } from "../../../hooks/typedHooks";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../redux/slices/filterSlice";
import { productInterface } from "../../../hooks/useProducts";


interface productsProps{
  products: productInterface[]
}

export const GenderFilter= ({products}: productsProps) => {
  
  const [isVisible, setIsVisible] = useState(true);

  const dispatch = useDispatch();

  const setCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.setCategory(e.target.value));
    dispatch(filterActions.setProducts(products));
  }
  
  return (
    <div className={s.genderFilter}>
      <h4
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Gender <span>{isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </h4>
      {isVisible && (
        <div className={s.filterValues}>
          <label className={""}>
            <input
              type="radio"
              name="category"
              value="men"
              onChange={setCategory}
            />
            Men
          </label>

          <label className={""}>
            <input
              type="radio"
              name="category"
              value="women"
              onChange={setCategory}
            />
            Women
          </label>
        </div>
      )}
    </div>
  );
};



import { useEffect, useState } from "react";
import s from "./DoubleRange.module.scss";
import ReactSlider from "react-slider";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAppSelector } from "../../../hooks/typedHooks";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../redux/slices/filterSlice";
import { productInterface } from "../../../hooks/useProducts";


interface productsProps{
  products: productInterface[]
}

export const DoubleRange = ({products}: productsProps) => {
  
  const dispatch = useDispatch();

  const selectedCategory = useAppSelector(state => state.filter.selectedCategory);
  const selectedPrice = useAppSelector(state => state.filter.selectedPrice);

  const [isVisible, setIsVisible] = useState(true);

  const handleSliderChange = (newValue: number[]) => {
    dispatch(filterActions.setPrice(newValue))
    dispatch(filterActions.setPriceFilteredProducts(products))
  };

  useEffect(() => {
    dispatch(filterActions.setPrice([0, 200]));
  }, [selectedCategory ]);

  return (
    <div className={s.priceFilter}>
      <h4 onClick={() => {
        setIsVisible(!isVisible)
      }}>
        Price <span>{isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </h4>
      {isVisible && (
        <div className={s.range}>
          <ReactSlider
            key={selectedCategory}
            max={200}
            min={0}
            className={s.horizontalSlider}
            thumbClassName={s.thumb}
            trackClassName={s.track}
            withTracks={true}
            value={selectedPrice}
            minDistance={10}
            onChange={(newValue) => {
              handleSliderChange(newValue);
            }}
          />
          <div className={s.rangeValue}>
            <span>${selectedPrice[0]}</span> <span>${selectedPrice[1]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

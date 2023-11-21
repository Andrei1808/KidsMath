import React, { useEffect, useState } from "react";
import s from "./DoubleRange.module.scss";
import ReactSlider from "react-slider";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface PriceFilterProps {
  onChange: (newValue: number[]) => void;
  selectedCategory: string;
}

export const DoubleRange: React.FC<PriceFilterProps> = ({
  onChange,
  selectedCategory,
}) => {
  const [value, setValue] = useState<number[]>([0, 200]);
  const [isVisible, setIsVisible] = useState(true);

  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setValue([0, 200]);
  }, [selectedCategory]);

  return (
    <div className={s.priceFilter}>
      <h4 onClick={() => setIsVisible(!isVisible)}>
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
            defaultValue={[0, 200]}
            minDistance={10}
            onChange={(newValue) => {
              handleSliderChange(newValue);
            }}
          />
          <div className={s.rangeValue}>
            <p>${value[0]}</p> <p>${value[1]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

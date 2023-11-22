import React, { useState } from "react";
import s from "./GenderFilter.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface GenderFilterProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCategory: string;
}

export const GenderFilter: React.FC<GenderFilterProps> = ({
  onChange,
  selectedCategory,
}) => {
  const [isVisible, setIsVisible] = useState(true);
console.log(selectedCategory);
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
          <label className={ ""}>
            <input type="radio" name="category" value="men" onChange={onChange} />
            Men
          </label>

          <label className={""}>
            <input type="radio" name="category" value="women" onChange={onChange} />
            Women
          </label>
        </div>
      )}
    </div>
  );
};

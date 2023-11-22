import React from "react";
import s from "./GenderFilter.module.scss";

interface GenderFilterProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCategory: string;
}

export const GenderFilter: React.FC<GenderFilterProps> = ({
  onChange,
  selectedCategory,
}) => {
  return (
    <div className={s.genderFilter}>
      <label className={selectedCategory === "new" ? s.active : ""}>
        <input type="radio" name="male" value="men" onChange={onChange} />
        Men
      </label>

      <label className={selectedCategory === "all" ? s.active : ""}>
        <input type="radio" name="male" value="women" onChange={onChange} />
        Women
      </label>
    </div>
  );
};

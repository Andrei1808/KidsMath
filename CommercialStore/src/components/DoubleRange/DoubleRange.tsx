import React, { useState } from "react";
import s from "./DoubleRange.module.scss";
import ReactSlider from "react-slider";

export default function DoubleRange() {
  const [value, setValue] = useState([0, 999]);

  const trackStyle = {
    backgroundColor: "red", // Задаем красный цвет между ползунками
    height: "6px", // Задаем высоту полосы
  };

  return (
    <div>
      <ReactSlider
        max={999}
        min={0}
        className={s.horizontalSlider}
        thumbClassName={s.thumb}
        trackClassName={s.track}
        withTracks={true}
        defaultValue={[0, 999]}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        minDistance={10}
        onChange={(value, index) => setValue(value)}
      />

      RESULT: {value[0]} - {value[1]}
    </div>
  );
}
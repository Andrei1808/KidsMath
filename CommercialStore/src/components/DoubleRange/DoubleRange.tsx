import React, { useState } from "react";
import s from "./DoubleRange.module.scss";
import ReactSlider from "react-slider";

export default function DoubleRange() {
  const [value, setValue] = useState([0, 300]);


  return (
    <div>
      <ReactSlider
        max={300}
        min={0}
        className={s.horizontalSlider}
        thumbClassName={s.thumb}
        trackClassName={s.track}
        withTracks={true}
        defaultValue={[0, 300]}
        minDistance={10}
        onChange={(value, index) => setValue(value)}
      />

      RESULT: {value[0]} - {value[1]}
    </div>
  );
}
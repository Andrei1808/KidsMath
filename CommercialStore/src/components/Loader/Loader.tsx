import React from "react";
import { SpinnerDotted } from "spinners-react/lib/esm/SpinnerDotted";
import s from './Loader.module.scss'

export default function Loader() {
  return (
    <div className={s.wrapper}>
      <SpinnerDotted size={100} color={"rgba(138, 51, 253, 1)"} />
    </div>
  );
}

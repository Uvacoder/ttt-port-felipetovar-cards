import { useState } from "react";
import "./Collapsable.scss";

export default function Collapsable({ children, label }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <span className="handle" onClick={() => setShow((x) => !x)}>
        <i className="material-icons">{show ? "arrow_drop_down" : "arrow_right"}</i>
        <i>{show ? 'hide' : 'show'} {label}</i>
      </span>
      {show && children}
    </>
  );
}

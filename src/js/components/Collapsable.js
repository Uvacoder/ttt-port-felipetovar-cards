import { useState } from "react";

export default function Collapsable({ headerClosed, headerOpened, children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <span className="handle" onClick={() => setShow((x) => !x)}>{show ? headerOpened : headerClosed}</span>
      {show && children}
    </>
  );
}

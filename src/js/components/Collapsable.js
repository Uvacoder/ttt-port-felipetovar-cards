import { useState } from "react";

export default function Collapsable({ headerClosed, headerOpened, children }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <span onClick={() => setShow((x) => !x)}>{show ? headerOpened : headerClosed}</span>
      {show && children}
    </>
  );
}

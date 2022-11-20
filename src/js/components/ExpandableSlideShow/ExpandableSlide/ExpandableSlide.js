import "./ExpandableSlide.scss";
import { useState } from "react";
import classNames from "classnames";

export default function ExpandableSlide({ title, children, open, setOpen, closed }) {
  const slideTitle = <div className="slide-title">{title}</div>;
  return (
    <div className={classNames("expandable-slide", { open: open, closed: closed })} onClick={setOpen}>
      {slideTitle}
      <div className="slide-content">
        {slideTitle}
        {children}
      </div>
    </div>
  );
}

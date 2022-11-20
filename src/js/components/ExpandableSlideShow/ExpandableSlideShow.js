import "./ExpandableSlideShow.scss";

import ExpandableSlide from "./ExpandableSlide/ExpandableSlide";
import { useState } from "react";

export default function ExpandableSlideShow({ titles, slides }) {
  const [openSlide, setOpenSlide] = useState(false);

  return (
    <div className="expandable-slide-show">
      {titles.map((title, i) => (
        <ExpandableSlide title={title} key={i} open={openSlide === i + 1} closed={openSlide && openSlide !== i + 1} setOpen={() => setOpenSlide(i + 1)}>
          {slides[i]}
        </ExpandableSlide>
      ))}
    </div>
  );
}

import { useState } from "react";
import "./ImageSlide.scss";

export default function ImageSlide({ links }) {
  const [selected, setSelected] = useState(0);

  function slide(i) {
    setSelected((x) => (x + i + links.length) % links.length);
  }

  const images = links.map((link, i) => <img className="img" key={i} src={link} alt={`headshot-${i}`} />);

  return (
    <div className="image-slide">
      <span className="material-icons" onClick={() => slide(-1)}>
        arrow_back_ios
      </span>
      <div className="display">{images[selected]}</div>
      <span className="material-icons" onClick={() => slide(1)}>
        arrow_forward_ios
      </span>
    </div>
  );
}

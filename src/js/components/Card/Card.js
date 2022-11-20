import "./Card.scss";

export default function Card({ children, img, onClick, className }) {
  return (
    <div className={`${className || ""} card`} onClick={onClick}>
      <img src={`${img}`} alt={`${img}`} className="card-bg" />
      <div className="card-bg-mask" />
      <div className="card-content">{children}</div>
    </div>
  );
}

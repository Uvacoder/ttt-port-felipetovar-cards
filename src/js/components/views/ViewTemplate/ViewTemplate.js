import "./ViewTemplate.scss";

export default function ViewTemplate({ header, children }) {
  return (
    <div className="view-template">
      <h2 className="header">{header}</h2>
      <div className="content">{children}</div>
    </div>
  );
}

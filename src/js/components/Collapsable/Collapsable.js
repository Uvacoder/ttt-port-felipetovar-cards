import "./Collapsable.scss";

export default function Collapsable({ children, handler, show, label }) {
  return (
    <>
      <span className="handle" onClick={() => handler(show)}>
        <i className="material-icons">{show ? "arrow_drop_down" : "arrow_right"}</i>
        <i>{label}</i>
      </span>
      {show && children}
    </>
  );
}

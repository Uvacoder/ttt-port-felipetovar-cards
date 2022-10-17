import classNames from "classnames";

export default function Modal({ children, show, setShow }) {
  const modalClass = classNames("modal-outer", { show: !!show, hide: !show });
  return (
    <div className={modalClass}>
      <div className="modal-inner">
        <button className="close-btn" onClick={() => setShow(false)}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

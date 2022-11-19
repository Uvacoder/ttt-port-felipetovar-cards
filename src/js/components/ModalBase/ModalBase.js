import "./ModalBase.scss";
import classNames from "classnames";
import { createPortal } from "react-dom";

export default function ModalBase({ children, open }) {
  return createPortal(
    <div className={classNames("modal-base", open && "open")}>
      <div className="modal-base-inner">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}

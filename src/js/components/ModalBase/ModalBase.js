import "./ModalBase.scss";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

export default function ModalBase({ children, open }) {
  const { darkTheme } = useContext(ThemeContext);
  return createPortal(
    <div className={classNames("modal-base", open && "open", { dark: darkTheme })}>
      <div className="modal-base-inner">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}

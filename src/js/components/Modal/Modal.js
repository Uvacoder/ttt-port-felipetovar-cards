import "./Modal.scss";
import ModalBase from "../ModalBase/ModalBase";
import { Icon } from "@iconify/react";

export default function Modal({ children, className, open, setOpen }) {
  return (
    <ModalBase open={open} setOpen={setOpen}>
      <div className={`${className || ""} modal`}>
        <Icon className="modal-close-btn" icon="mdi:close-circle" onClick={() => setOpen(false)} />
        <div className="modal-inner">{children}</div>
      </div>
    </ModalBase>
  );
}

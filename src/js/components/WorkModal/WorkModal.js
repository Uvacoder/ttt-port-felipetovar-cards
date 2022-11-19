import "./WorkModal.scss";
import Modal from "../Modal/Modal";

export default function WorkModal({ work, open, setOpen }) {
  return (
    <Modal className={"work-modal"} open={open} setOpen={setOpen}>
      {work.name}
      {work.subtitle}
      {work.year}
      {work.duration}
      {work.commission}
    </Modal>
  );
}

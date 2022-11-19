import "./WorksView.scss";
import works from "../../../json/work-catalog.json";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

export default function WorksView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const categories = new Set();
  // works.forEach((x) => x.categories.forEach((y) => categories.add(y)));

  return (
    <div className="works-view">
      <h3>WORKS</h3>
      <div className="work-cards">
        {works.map((work, i) => (
          <div key={i} className="work-card" onClick={() => setIsModalOpen(true)}>
            {work.name}
          </div>
        ))}
      </div>
      <Modal className={"work-modal"} open={isModalOpen} setOpen={setIsModalOpen}>
        Hello world
      </Modal>
    </div>
  );
}

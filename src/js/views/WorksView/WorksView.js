import "./WorksView.scss";
import works from "../../../json/work-catalog.json";
import Modal from "../../components/Modal/Modal";
import WorkCard from "../../components/WorkCard/WorkCard";
import { useState } from "react";

export default function WorksView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(false);

  // const categories = new Set();
  // works.forEach((x) => x.categories.forEach((y) => categories.add(y)));

  return (
    <div className="works-view">
      {/* <h3 className="view-header">WORKS</h3> */}
      <div className="work-cards">
        {works.map((work, i) => (
          <WorkCard
            key={i}
            className="work-card"
            work={work}
            onClick={() => {
              setIsModalOpen(true);
              setSelectedWork(work);
            }}
          />
        ))}
      </div>
      <Modal className={"work-modal"} open={isModalOpen} setOpen={setIsModalOpen}>
        {selectedWork.name}
      </Modal>
    </div>
  );
}

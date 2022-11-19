import "./WorksView.scss";
import works from "../../../json/work-catalog.json";
import WorkCard from "../../components/WorkCard/WorkCard";
import WorkModal from "../../components/WorkModal/WorkModal";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { useState } from "react";

export default function WorksView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(false);

  // const categories = new Set();
  // works.forEach((x) => x.categories.forEach((y) => categories.add(y)));

  return (
    <>
      <ViewHeader title={"works"} icon="mdi:music" />
      <div className="works-view">
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
        <WorkModal work={selectedWork} open={isModalOpen} setOpen={setIsModalOpen} />
      </div>
    </>
  );
}

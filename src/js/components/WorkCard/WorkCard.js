import "./WorkCard.scss";
import Collapsable from "../Collapsable/Collapsable";
import WorkCardDetails from "../WorkCardDetails/WorkCardDetails";
import { SelectedWorkContext } from "../../contexts/SelectedWorkContext";
import WorkCardImage from "../WorkCardImage/WorkCardImage";

import { useContext } from "react";

export default function WorkCard({ work, id }) {
  const { selected, setSelected } = useContext(SelectedWorkContext);

  function exclusiveToggle(show) {
    setSelected(show ? false : id);
  }

  return (
    <>
      <div className="work-card">
        <WorkCardImage img={work.image} alt={work.title} />
        <div className="header">
          <span className="title">{work.title}</span> <span className="year">({work.year})</span> <span className="duration"> ~{work.duration}'</span>{" "}
          <br />
        </div>
        <div className="subtitle">
          <span>{work.subtitle}</span>
        </div>
        <br />
        {work.commission && (
          <>
            <div className="commission">{work.commission}.</div>
            <br />
          </>
        )}
        <Collapsable handler={exclusiveToggle} show={selected === id} label={`show ${selected === id ? "less" : "more"}`}>
          <WorkCardDetails work={work} />
        </Collapsable>
      </div>
    </>
  );
}

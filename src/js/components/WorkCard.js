import Collapsable from "./Collapsable";
import WorkCardDetails from "./WorkCardDetails";

export default function WorkCard({ work }) {
  return (
    <div className="work-card">
      <h4 className="work-card-header">
        <span className="title">{work.title}</span> <span>({work.year})</span> <span className="duration">{work.duration}'</span>
      </h4>
      <div>
        <span>{work.subtitle}</span>
      </div>
      <Collapsable headerClosed={'show details'} headerOpened={'hide details'}>
        <WorkCardDetails work={work} />
      </Collapsable>
    </div>
  );
}

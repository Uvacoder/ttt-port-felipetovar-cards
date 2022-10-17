import Collapsable from "./Collapsable";
import WorkCardDetails from "./WorkCardDetails";

export default function WorkCard({ work }) {
  return (
    <>
      <div className="work-card">
        <img
          className="work-image"
          src={"https://cdn.dribbble.com/users/4186471/screenshots/7906521/fordribbbbble3_still_2x.gif?compress=1&resize=400x300"}
          alt={work.title}
        />
        <h4 className="work-card-header">
          <span className="title">{work.title}</span> <span>({work.year})</span> <span className="duration">{work.duration}'</span>
        </h4>
        <div>
          <span className="work-subtitle">{work.subtitle}</span>
        </div>
        <br />
        {work.commission && (
          <>
            <div>{work.commission}</div>
            <br />
          </>
        )}
        <Collapsable headerClosed={"show details"} headerOpened={"hide details"}>
          <WorkCardDetails work={work} />
        </Collapsable>
      </div>
    </>
  );
}

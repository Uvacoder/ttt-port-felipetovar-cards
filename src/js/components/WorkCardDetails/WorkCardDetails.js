import InstrumentList from "../InstrumentList";
import Performances from "../Performances/Performances";
import KeyValue from "../KeyValue";

import "./WorkCardDetails.scss";

export default function WorkCardDetails({ work }) {
  return (
    <div className="work-card-details">
      {work.categories && (
        <KeyValue
          k={"tags"}
          v={work.categories.map((x, i) => {
            return (
              <span className="tag" key={`tag-${i}`}>
                {x}
                {i < work.categories.length - 1 ? ", " : "."}
              </span>
            );
          })}
        />
      )}
      <KeyValue k={"instrumentation"} v={<InstrumentList instruments={work.instrumentation} />} />
      {work.awards && (
        <KeyValue
          k={"awards"}
          v={work.awards.map((x, i) => (
            <div className="award" key={`award-${i}`}>
              • {x}.
            </div>
          ))}
        />
      )}
      {work.performances && <KeyValue k={"performances"} v={<Performances performances={work.performances} />} />}
    </div>
  );
}

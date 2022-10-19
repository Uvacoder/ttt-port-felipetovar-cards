import { dateRange } from "../../utils/formatDate";
import "./ResidenciesCV.scss";

export default function ResidenciesCV({ residencies }) {
  return (
    <div>
      <h4>Residencies</h4>
      {Object.keys(residencies).map((k, i) => {
        const date = k;
        const r = residencies[k];
        const role = r.role;
        const event = r.event;
        const end = r.end;
        const activities = r.activities.map((a, j) => (
          <span key={j}>
            {a}
            {j < r.activities.length - 1 ? ", " : "."}
          </span>
        ));
        return (
          <div key={i}>
            <div>{dateRange(date, end)}</div>
            <div>
              <span>{role} </span>
              <span>
                @ {event}. Activities: {activities}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

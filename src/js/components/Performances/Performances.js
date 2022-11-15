import "./Performances.scss";
import PerformerList from "../PerformerList";
import formatDate from "../../utils/formatDate";

export default function Performances({ performances }) {
  const keys = Object.keys(performances);
  return (
    <div>
      {keys
        .sort((a, b) => new Date(b) - new Date(a))
        .map((k, i) => {
          const p = performances[k];
          const event = <span className="event">{p.event}</span>;
          const venue = <span className="venue">{p.venue}</span>;
          const city = <span className="city">{p.city}</span>;
          const country = <span className="country">{p.country}</span>;
          const performers = <PerformerList performers={p.performers} />;
          const audio = p.audio && (
            <a target="_blank" rel="noreferrer" href={p.audio} className="material-icons">
              headset
            </a>
          );
          const video = p.video && (
            <a target="_blank" rel="noreferrer" href={`https://youtu.be/${p.video}`} className="material-icons">
              smart_display
            </a>
          );
          return (
            <div key={i} className="performance">
              {event} {i === keys.length - 1 && "(première)"} @ {venue}. {formatDate(k)}. {city} – {country}.
              <div className="performers">{performers}</div>
              <div className="media-links">
                {audio} {video}
              </div>
            </div>
          );
        })}
    </div>
  );
}

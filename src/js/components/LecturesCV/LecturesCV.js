import "./LecturesCV.scss";
import formatDate from "../../utils/formatDate";

export default function LecturesCV({ lectures }) {
  return (
    <div>
      <h3>Guest lectures</h3>
      {Object.keys(lectures).map((k, i) => {
        const lecture = lectures[k];
        return (
          <div key={i}>
            <div>{k}</div>
            {Object.keys(lecture).map((date, j) => {
              const l = lecture[date];
              const lang = l.language;
              const event = l.event;
              const venue = l.venue;
              const city = l.city;
              const country = l.country;
              return (
                <div key={j}>
                  <span>
                    • {event} @ {venue} [{lang.slice(0, 3)}]. {formatDate(date)}. {city} – {country}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

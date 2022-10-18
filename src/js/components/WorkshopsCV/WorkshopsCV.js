import formatDate from "../../utils/formatDate";
import "./Workshops.scss";

export default function WorkshopsCV({ workshops }) {
  return (
    <div>
      <h4>Workshops</h4>
      {Object.keys(workshops).map((k, i) => {
        const title = k;
        const workshop = workshops[k];
        return (
          <div key={i}>
            <div>{title}.</div>
            {Object.keys(workshop).map((d, j) => {
              const w = workshop[d];
              const sessionDates = Object.keys(w.sessions);
              const sessions = sessionDates.map((s, n) => (
                <span key={n}>
                  {formatDate(s, false)} ({w.sessions[s]}h)
                  {n < sessionDates.length - 1 ? ", " : ". "}
                </span>
              ));
              const host = w.host;
              const city = w.city;
              const country = w.country;
              return (
                <div key={j}>
                  • @ {host}. {city} – {country}. Sessions: {sessions}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

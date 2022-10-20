import formatDate from "../../utils/formatDate";
import "./Workshops.scss";

export default function WorkshopsCV({ workshops }) {
  return (
    <div className="cv-item cv-section">
      <h4 className="cv-subsubheader">Workshops</h4>
      {Object.keys(workshops).map((k, i) => {
        const title = k;
        const workshop = workshops[k];
        return (
          <div key={i} className="cv-item">
            <div className="bold">{title}</div>
            {Object.keys(workshop).map((d, j) => {
              const w = workshop[d];
              const sessionDates = Object.keys(w.sessions);
              const year = formatDate(sessionDates[0], true, false, false);
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
                <div key={j} className="indent-1">
                  <span className="cv-hl">@ </span>
                  {host}. {city} – {country}. {year}. Sessions: {sessions}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

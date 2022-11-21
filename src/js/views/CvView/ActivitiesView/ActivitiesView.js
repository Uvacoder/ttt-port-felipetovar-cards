import "./ActivitiesView.scss";

export default function ActivitiesView({ work }) {
  return (
    <div className="activities-view">
      <div className="lectures">
        <div className="header">lectures</div>
        {work.lectures.map((lecture, i) => (
          <div className="lecture" key={i}>
            <span className="name">{lecture.name}</span>
            <div className="events">
              {lecture.events.map((ev, j) => (
                <div className="event" key={j}>
                  <span className="name">{ev.name}</span>
                  <span className="venue">@ {ev.venue}</span>
                  <span className="language">[{ev.language}]</span>
                  <span className="date">{ev.date}</span>
                  <span className="city">{ev.city}</span>
                  <span className="country">{ev.country}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="residencies">
        <div className="header">residencies</div>
        {work.residencies.map((residence, i) => (
          <div className="residence" key={i}>
            <span className="role">{residence.role}</span>
            <span className="institution">{residence.institution}</span>
            <span className="event">{residence.event}</span>
            <span className="end">{residence.end}f</span>
            <div className="activities">
              {residence.activities.map((ac, j) => (
                <span className="residence-activity" key={j}>
                  {ac}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="workshops">
        <div className="header">workshops</div>
        {work.workshops.map((workshop, i) => (
          <div className="workshop" key={i}>
            <span className="name">{workshop.name}</span>
            <div className="events">
              {workshop.events.map((ev, j) => (
                <div className="event" key={j}>
                  <span className="date">{ev.date}</span>
                  <span className="language">[{ev.language}]</span>
                  <span className="num-sessions">{ev.numSessions}</span>
                  <span className="total-hours">{ev.totalHours}</span>
                  <span className="institution">{ev.institution}</span>
                  <span className="city">{ev.city}</span>
                  <span className="country">{ev.country}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

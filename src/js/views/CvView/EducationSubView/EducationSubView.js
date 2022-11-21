import "./EducationSubView.scss";
import { dateRange } from "../../../utils/formatDate";

export default function EducationSubView({ education }) {
  return (
    <div className="education-subview">
      <div className="degrees">
        <div className="header">degrees</div>
        {education.degrees
          .sort((a, b) => Math.max(...b.date) - Math.max(...a.date))
          .map((degree, i) => (
            <div className="degree" key={i}>
              <div className="line-1">
                <span className="name">{degree.name} </span>
                <span className="years">({degree.date[1]}), </span>
                <span className="major">{degree.major}</span>
              </div>
              <div className="line-3">
                <span className="institution">{degree.institution}. </span>
                <span className="city">{degree.city}</span>
              </div>
              {degree.minors && (
                <span className="minors">
                  <span>Minor areas: </span>
                  {degree.minors.map((minor, j) => (
                    <span key={j}>
                      <span className="minor">{minor}</span>
                      {j < degree.minors.length - 1 && " + "}
                    </span>
                  ))}
                </span>
              )}
            </div>
          ))}
      </div>
      <div className="other">
        <div className="others">
          <div className="header">Other</div>
          {education.other.map((ed, i) => (
            <div className="other" key={i}>
              <div className="line-1">
                {ed.url ? (
                  <a className="name" href={ed.url} target="_blank" rel="noreferrer">
                    {ed.name}
                  </a>
                ) : (
                  <span className="name">{ed.name}</span>
                )}
                <span className="type"> ({ed.type})</span>
              </div>
              <div>
                <span className="institution">{ed.institution}. </span>
                <span className="location">{ed.location}. </span>
                <span className="date">{dateRange(ed.date[0], ed.date[1])}.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

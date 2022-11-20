import "./EducationSubView.scss";

export default function EducationSubView({ education }) {
  return (
    <div className="education-subview">
      <div className="degrees">
        {education.degrees
          .sort((a, b) => Math.max(...b.date) - Math.max(...a.date))
          .map((degree, i) => (
            <div className="degree" key={i}>
              <img className="logo" src={degree.logo} alt="" />
              <span className="name">{degree.name}</span>
              <span className="major">{degree.major}</span>
              {degree.minors && <span className="minors">{degree.minors}</span>}
              <span className="institution">{degree.institution}</span>
              <span className="city">{degree.city}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

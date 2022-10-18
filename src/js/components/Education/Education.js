import "./Education.scss";
import { useMemo } from "react";

export default function Education({ education, otherEducation }) {
  const degrees = useMemo(() => {
    let d = Object.entries(education).sort((a, b) => b[1].years[1] - a[1].years[1]);
    return d.map((x, i) => {
      const degree = x[0];
      const city = x[1].city;
      const country = x[1].country;
      const university = x[1].university;
      const years = `${x[1].years[0]}–${x[1].years[1]}`;
      const major = x[1].major;
      const minors = x[1].minors;
      return (
        <div key={i}>
          <div>
            <span>• {degree}, </span>
            <span>{major}</span>
          </div>
          <div>
            <span>{university}. </span>
            <span>
              {city} – {country}. {years}.
            </span>
          </div>
          {minors && (
            <div>
              Minor fields:{" "}
              {minors.map((y, j) => (
                <span key={j}>
                  {y}
                  {j === minors.length - 1 ? "." : ", "}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    });
  }, []);

  const others = Object.keys(otherEducation).map((k, i) => {
    const institution = otherEducation[k].institution;
    const loc = otherEducation[k].location;
    const date = otherEducation[k].date;
    return (
      <div key={i}>
        <span>{k}</span>. <span>{institution}</span> {loc}. {date}
      </div>
    );
  });
  return (
    <div>
      <h3>Education</h3>
      {degrees}
      {others}
    </div>
  );
}

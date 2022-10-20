import "./Teaching.scss";
import Collapsable from "../Collapsable/Collapsable";
import CoursesCV from "../CoursesCV/CoursesCV";

export default function TeachingCV({ teaching }) {
  const t = Object.entries(teaching)
    .sort((a, b) => {
      let lastYear1 = a[1].terms[0][1];
      let lastYear2 = b[1].terms[0][1];
      if (lastYear1 === true) {
        lastYear1 = lastYear2 + 1;
      } else if (lastYear2 === true) {
        lastYear2 = lastYear1 + 1;
      }
      return lastYear2 - lastYear1;
    })
    .map((x, i) => {
      const institution = x[1].institution;
      const city = x[1].city;
      const country = x[1].country;
      const courses = x[1].courses;
      const term = x[1].terms.map((y, j) => (
        <div key={j} className="v-stack">
          {y[0]} – {y[1] === true ? "pr." : y[1]}
        </div>
      ));
      return (
        <div key={(x, i)} className="position cv-item">
          <div className="cv-term">{term}</div>
          <div>
            <span className="title">{x[0]}. </span>
            <span>
              {institution}. {city} – {country}.
            </span>
            <Collapsable label="courses">
              <CoursesCV courses={courses} />
            </Collapsable>
          </div>
        </div>
      );
    });

  return (
    <div className="teaching cv-subsection">
      <h3 className="cv-subsubheader">Teaching</h3>
      {t}
    </div>
  );
}

import "./CoursesCV.scss";

export default function CoursesCV({ courses }) {
  return (
    <div className="courses indent-2 b-pad">
      {Object.keys(courses).map((k, i) => {
        return (
          <div key={i}>
            <span className="bold">{k}</span>, 
            {courses[k].terms.map((y, j) => (
              <span key={j}> {y}{j < courses[k].terms.length - 1 ? ", " : "."}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

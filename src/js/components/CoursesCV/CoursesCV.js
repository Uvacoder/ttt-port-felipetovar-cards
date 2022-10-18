import "./CoursesCV.scss";

export default function CoursesCV({ courses }) {
  return (
    <div>
      {Object.keys(courses).map((k, i) => {
        return (
          <div key={i}>
            <span>{k}, </span>
            {courses[k].terms.map((y, j) => (
              <span key={j}>
                {y}{j < courses[k].terms.length - 1 ? ", " : "."}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

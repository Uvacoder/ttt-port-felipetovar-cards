import "./ExperienceSubView.scss";

export default function ExperienceSubView({ work }) {
  const categories = ["teaching", "industry"];
  return (
    <div className="experience-subview">
      {categories.map((key, k) => (
        <div className={`${key}`} key={k}>
          <div className="header">{key}</div>
          {work[key]
            .sort((a, b) => Math.max(...b.date) - Math.max(...a.date))
            .map((position, i) => {
              position.date[1] = position.date[1] === true ? 3000 : position.date[1];
              return (
                <div className="position" key={i}>
                  <span className="name">{position.name} </span>
                  <span className="workplace">{position.workplace}. </span>
                  <span className="city">
                    {position.city}. {position.country}.
                  </span>
                  <span className="date">
                    {position.date[1]
                      ? `${position.date[0]}–${position.date[1] === 3000 ? "pr." : JSON.stringify(position.date[1]).slice(2, 4)}`
                      : position.date[0]}
                  </span>
                  {position.courses && (
                    <table className="courses">
                      <tbody>
                        {position.courses.map((course, j) => (
                          <tr key={j} className="course">
                            <td className="name">{course.name}</td>
                            <td className="terms">{course.terms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}

import "./ExperienceSubView.scss";

export default function ExperienceSubView({ work }) {
  return (
    <div className="experience-subview">
      <div className="teaching">
        <div className="header">teaching</div>
        {work.teaching
          .sort((a, b) => Math.max(...b.date) - Math.max(...a.date))
          .map((position, i) => {
            position.date[1] = position.date[1] === true ? 3000 : position.date[1];
            return (
              <div className="position" key={i}>
                <span className="name">{position.name} </span>
                <span className="institution">{position.institution}. </span>
                <span className="city">{position.city}. {position.country}.</span>
                <span className="date">{`${position.date[0]}–${
                  position.date[1] === 3000 ? "pr." : JSON.stringify(position.date[1]).slice(2, 4)
                }`}</span>
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
                {/* <div className="courses">
                  {position.courses.map((course, j) => (
                    <div key={j} className="course">
                      <span className="name">{course.name}. </span>
                      <span className="terms">{course.terms}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

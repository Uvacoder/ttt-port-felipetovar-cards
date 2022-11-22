import "./SkillsSubView.scss";

export default function SkillsSubView({ skills }) {
  return (
    <div className="skills-subview">
      {skills
        .sort((a, b) => b.level - a.level)
        .map((skill, i) => (
          <div className="skill" key={i}>
            <span className="name">{skill.name}</span>
            <span className="level">{skill.level}</span>
            {skill.keywords && (
              <div className="keywords">
                {skill.keywords.map((kw, k) => (
                  <span className="keyword" key={k}>
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

import "./SkillsCV.scss";
import TechnologyCV from "./TechnologyCV/TechnologyCV";

export default function SkillsCV({ skills }) {
  
  return (
    <div className="cv-section">
      <h3 className="cv-subheader">Skills</h3>
      <TechnologyCV technology={skills.technology} />
    </div>
  );
}

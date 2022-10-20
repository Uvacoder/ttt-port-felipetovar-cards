import "./SkillsCV.scss";
import TechnologyCV from "./TechnologyCV/TechnologyCV";

export default function SkillsCV({ skills }) {

  // const languages = Object.keys(skills.languages).map()
  
  return (
    <div className="cv-section">
      <h3 className="cv-subheader">Skills</h3>
      <TechnologyCV technology={skills.technology} />
    </div>
  );
}

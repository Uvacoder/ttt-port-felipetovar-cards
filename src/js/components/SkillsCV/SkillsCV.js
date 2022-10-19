import "./SkillsCV.scss";
import TechnologyCV from "./TechnologyCV/TechnologyCV";

export default function SkillsCV({ skills }) {
  
  return (
    <div>
      <h3>Skills</h3>
      <TechnologyCV technology={skills.technology} />
    </div>
  );
}

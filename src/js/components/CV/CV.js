import "./CV.scss";
import cvJSON from "../../../json/cv.json";
import EducationCV from "../EducationCV/EducationCV";
import ExperienceCV from "../ExperienceCV/ExperienceCV";
import SkillsCV from "../SkillsCV/SkillsCV";

export default function CV() {
  return (
    <div className="cv">
      <h2 className="cv-header">Curriculum Vitae</h2>
      <EducationCV education={cvJSON.education} otherEducation={cvJSON["other education"]} />
      <ExperienceCV experience={cvJSON.experience} />
      <SkillsCV skills={cvJSON.skills} />
    </div>
  );
}

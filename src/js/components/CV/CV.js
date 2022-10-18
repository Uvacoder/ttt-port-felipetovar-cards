import "./CV.scss";
import cvJSON from "../../../json/cv.json";
import Education from "../Education/Education";
import ExperienceCV from "../ExperienceCV/ExperienceCV";

export default function CV() {
  
  return (
    <div className="cv">
      <h2>Curriculum Vitae</h2>
      <Education education={cvJSON.education} otherEducation={cvJSON["other education"]} />
      <ExperienceCV experience={cvJSON.experience} />
    </div>
  );
}

import TeachingCV from "../TeachingCV/TeachingCV";
import LecturesCV from "../LecturesCV/LecturesCV";
import WorkshopsCV from "../WorkshopsCV/WorkshopsCV";
import ResidenciesCV from "../ResidenciesCV/ResidenciesCV";
import SkillsCV from "../SkillsCV/SkillsCV";

export default function ExperienceCV({ experience }) {
  return (
    <div>
      <h3>Experience</h3>
      <TeachingCV teaching={experience.teaching} />
      <LecturesCV lectures={experience.lectures} />
      <WorkshopsCV workshops={experience.workshops} />
      <ResidenciesCV residencies={experience.residencies} />
    </div>
  );
}

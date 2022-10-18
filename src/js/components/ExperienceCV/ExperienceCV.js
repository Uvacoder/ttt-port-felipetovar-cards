import TeachingCV from "../TeachingCV/TeachingCV";
export default function ExperienceCV({ experience }) {
  return (
    <div>
      <h3>Experience</h3>
      <TeachingCV teaching={experience.teaching} />
    </div>
  );
}

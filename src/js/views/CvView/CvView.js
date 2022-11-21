import "./CvView.scss";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import ExpandableSlideShow from "../../components/ExpandableSlideShow/ExpandableSlideShow";
import EducationSubView from "./EducationSubView/EducationSubView";
import AwardsSubView from "./AwardsSubView/AwardsSubView";
import ExperienceSubView from "./ExperienceSubView/ExperienceSubView";
import ActivitiesView from "./ActivitiesView/ActivitiesView";
import { Icon } from "@iconify/react";

export default function CvView({ cv, works }) {
  const slides = {
    "work experience": <ExperienceSubView work={cv.work} />,
    publications: <EducationSubView education={cv.education} />,
    "awards / grants": <AwardsSubView cv={cv} works={works} />,
    activities: <ActivitiesView work={cv.work} />,
    education: <EducationSubView education={cv.education} />,
    skills: <EducationSubView education={cv.education} />,
  };
  const icons = [
    "mdi:company",
    "mdi:paper-check",
    "healthicons:award-trophy",
    "fluent-mdl2:activity-feed",
    "mdi:education-outline",
    "carbon:skill-level-advanced",
  ];
  return (
    <div className="cv-view">
      <ViewHeader title="CV" icon="material-symbols:work" />
      <ExpandableSlideShow
        titles={Object.keys(slides).map((key, i) => (
          <span key={i} className="cv-section-title">
            <Icon icon={icons[i]} className="icon" />
            &nbsp;
            &nbsp;
            {key}
          </span>
        ))}
        slides={Object.values(slides)}
      />
    </div>
  );
}

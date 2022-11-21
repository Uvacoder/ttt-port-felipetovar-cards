import "./CvView.scss";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import ExpandableSlideShow from "../../components/ExpandableSlideShow/ExpandableSlideShow";
import EducationSubView from "./EducationSubView/EducationSubView";
import AwardsSubView from "./AwardsSubView/AwardsSubView";

export default function CvView({ cv, works }) {
  const slides = {
    "work experience": <EducationSubView education={cv.education} />,
    awards: <AwardsSubView cv={cv} works={works} />,
    education: <EducationSubView education={cv.education} />,
    skills: <EducationSubView education={cv.education} />,
  };
  return (
    <div className="cv-view">
      <ViewHeader title="CV" icon="material-symbols:work" />
      <ExpandableSlideShow titles={Object.keys(slides)} slides={Object.values(slides)} />
    </div>
  );
}

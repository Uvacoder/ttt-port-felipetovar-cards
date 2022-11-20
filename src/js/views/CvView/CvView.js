import "./CvView.scss";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import ExpandableSlideShow from "../../components/ExpandableSlideShow/ExpandableSlideShow";
import EducationSubView from "./EducationSubView/EducationSubView";

export default function CvView({ cv }) {
  const slides = {
    work: <EducationSubView education={cv.education} />,
    awards: <EducationSubView education={cv.education} />,
    education: <EducationSubView education={cv.education} />,
    skills: <EducationSubView education={cv.education} />,
  };
  return (
    <>
      <ViewHeader title="CV" icon="material-symbols:work" />
      <ExpandableSlideShow titles={Object.keys(slides)} slides={Object.values(slides)} />
    </>
  );
}

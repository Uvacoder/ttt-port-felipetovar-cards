import "./WorkCard.scss";
import Card from "../Card/Card";

export default function WorkCard({ work, onClick }) {
  return (
    // <div className="work-card" onClick={onClick}>
    //   <img src={work.artwork} alt="" className="artwork" />
    //   <div className="artwork-mask" />
    //   <div className="text">
    //     <span className="work-name">{work.name}</span>
    //     <span className="work-year">({work.year})</span>
    //     <span className="work-subtitle">{work.subtitle}</span>
    //   </div>
    // </div>
    <Card onClick={onClick} img={work.artwork} className="work-card">
      <span className="work-name">{work.name}</span>
      <span className="work-year">({work.year})</span>
      <span className="work-subtitle">{work.subtitle}</span>
    </Card>
  );
}

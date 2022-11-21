import "./WorkCard.scss";
import Card from "../Card/Card";

export default function WorkCard({ work, onClick }) {
  return (
    <Card onClick={onClick} img={work.artwork} className="work-card">
      <div className="work-info">
        <span className="work-name">{work.name}</span>
        <span className="work-year">({work.year})</span>
        <span className="work-subtitle">{work.subtitle}</span>
      </div>
    </Card>
  );
}

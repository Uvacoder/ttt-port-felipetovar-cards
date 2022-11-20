import "./WorkCard.scss";

export default function WorkCard({ work, onClick }) {
  return (
    <div className="work-card" onClick={onClick}>
      <img src={work.artwork} alt="" className="artwork" />
      <div className="artwork-mask" />
      <div className="text">
        <span className="work-name">{work.name}</span>
        <span className="work-year">({work.year})</span>
        <span className="work-subtitle">{work.subtitle}</span>
      </div>
    </div>
  );
}

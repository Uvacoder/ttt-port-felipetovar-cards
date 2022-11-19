import "./WorksView.scss";
import works from "../../../json/work-catalog.json";

export default function WorksView() {
  const categories = new Set();
  works.forEach((x) => x.categories.forEach((y) => categories.add(y)));

  return (
    <div className="works-view">
      <h3>WORKS</h3>
      <div className="category-chooser">
        {["all", ...Array.from(categories)].map((c, i) => (
          <div key={i} className="category">{c}</div>
        ))}
      </div>
      <div className="work-cards">
        {works.map((work, i) => (
          <div key={i} className="work-card">
            {work.name}
          </div>
        ))}
      </div>
    </div>
  );
}

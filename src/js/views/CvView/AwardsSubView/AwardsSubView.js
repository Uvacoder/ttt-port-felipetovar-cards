import "./AwardsSubView.scss";

export default function AwardsSubView({ cv, works }) {
  const awards = {
    artistic: [],
    academic: cv.awards.academic,
  };
  works
    .map((work) => work.awards)
    .filter((x) => x)
    .forEach((awardList) => awardList.forEach((award) => awards.artistic.push(award)));
  return (
    <div className="awards-subview">
      {Object.keys(awards).map((key, k) => (
        <div key={k} className={key}>
          <div className="header">{key}</div>
          <div className="awards">
            {awards[key]
              .sort((a, b) => b.date - a.date)
              .map((award, i) => (
                <div key={i} className="award">
                  <span className="name">{award.name}</span>
                  <span className="date">{award.date}</span>
                  <span className="institution">{award.institution}</span>
                  <span className="country">{award.country}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

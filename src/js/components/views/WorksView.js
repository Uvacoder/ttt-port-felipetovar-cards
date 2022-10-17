/* react */
import { useMemo } from "react";
import WorkCard from "../WorkCard";

import jsonPortfolio from "../../../json/work-catalog.json";

export default function WorksView() {
  const numCols = 3;
  const portfolio = useMemo(() => {
    let p = Object.entries(jsonPortfolio);
    p.shift();
    p.sort((a, b) => b[1].year - a[1].year);
    const cols = [...Array(numCols).keys()].map((x) => []);
    p.forEach((work, i) => {
      cols[i % numCols].push(<WorkCard key={work[0]} work={{ title: work[0], ...work[1] }} />);
    });
    return cols.map((x, i) => (
      <div className="col" key={i}>
        {x}
      </div>
    ));
  }, []);

  return (
    <>
      <div className="work-list">{portfolio}</div>
    </>
  );
}

/* react */
import { useMemo, useState } from "react";
import WorkCard from "../../WorkCard/WorkCard";
import { SelectedWorkContext } from "../../../contexts/SelectedWorkContext";

import jsonPortfolio from "../../../../json/work-catalog.json";

import "./WorksView.scss";

export default function WorksView() {
  const [selected, setSelected] = useState(false);

  const numCols = 3;

  const portfolio = useMemo(() => {
    let p = Object.entries(jsonPortfolio);
    p.shift();
    p.sort((a, b) => b[1].year - a[1].year);
    const cols = [...Array(numCols).keys()].map((x) => []);
    p.forEach((work, i) => {
      cols[i % numCols].push(<WorkCard key={work[0]} id={i} work={{ title: work[0], ...work[1] }} />);
    });
    return cols.map((x, i) => (
      <div className="col" key={i}>
        {x}
      </div>
    ));
  }, []);

  return (
    <>
      <SelectedWorkContext.Provider value={{ selected, setSelected }}>
        <div className="works-view">{portfolio}</div>
      </SelectedWorkContext.Provider>
    </>
  );
}

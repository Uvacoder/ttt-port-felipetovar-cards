/* react */
import { useMemo } from "react";

/* components */
import NavBar from "./js/components/NavBar";
import MainView from "./js/components/MainView";
import WorkCard from "./js/components/WorkCard";

/* json */
import jsonPortfolio from "./json/work-catalog.json";

/* contexts */
import { PortfolioContext } from "./js/contexts/PortfolioContext";

/* sass */
import "./index.scss";

export default function App() {
  const portfolio = useMemo(() => {
    let p = Object.entries(jsonPortfolio);
    p.shift();
    p.sort((a, b) => b[1].year - a[1].year);
    return p.map((work, i) => {
      return <WorkCard key={work[0]} work={{ title: work[0], ...work[1] }} />;
    });
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio }}>
      <div>
        <NavBar />
        <MainView />
      </div>
    </PortfolioContext.Provider>
  );
}

/* react */
import { useContext } from "react";

/* contexts */
import { PortfolioContext } from "../../contexts/PortfolioContext";

export default function WorksView() {
  const { portfolio } = useContext(PortfolioContext);

  return <div className="work-list">{portfolio}</div>;
}

import "./SoftwareView.scss";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { Icon } from "@iconify/react";

export default function SoftwareView({ cv }) {
  const tableRows = ["date", "active", "description"];
  const stateMap = {
    true: "material-symbols:check-circle",
    false: "gridicons:cross-circle",
  };
  return (
    <>
      <ViewHeader title="software" icon="material-symbols:code" />
      <div className="software-view">
        {cv.work.software
          .sort((a, b) => b.date - a.date)
          .map((software, i) => (
            <div key={i} className="software" onClick={software.url}>
              <span className="name">{software.name}</span>
              <table className="table">
                <tbody className="tbody">
                  {tableRows.map((row, j) => (
                    <tr key={j} className={`row ${row}`}>
                      <td className="key">{row}</td>
                      <td className="value">
                        {row === "active" ? (
                          <Icon className={`icon ${software[row] ? "active" : "inactive"}`} icon={stateMap[software[row]]} />
                        ) : (
                          software[row]
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </>
  );
}

import "./TabGroup.scss";
import Tab from "../Tab/Tab";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function TabGroup({ tabs }) {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState(tabs[selected].view);

  return (
    <div className="tab-view">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <Tab
            className={classNames({ selected: selected === i })}
            key={i}
            label={tab.label}
            handler={() => {
              setView(tab.view);
              setSelected(i);
            }}
          />
        ))}
      </div>
      <div className="view">{view}</div>
    </div>
  );
}

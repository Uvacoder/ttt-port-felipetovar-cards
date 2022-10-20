import "./AboutView.scss";

import { useState } from "react";

import CV from "../../CV/CV";
import Bio from "./Bio/Bio";
import TabGroup from "../../TabGroup/TabGroup";

export default function AboutView() {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      label: "BIO",
      view: <Bio />,
    },
    {
      label: "CV",
      view: <CV />,
    },
  ];
  return (
    <div className="about-view">
      <TabGroup tabs={tabs} />
    </div>
  );
}

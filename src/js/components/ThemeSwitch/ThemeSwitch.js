import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import "./ThemeSwitch.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeSwitch() {
  const [switchOn, setSwitchOn] = useState(false);
  const { setDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className="theme-switch"
      onClick={() => {
        setSwitchOn((x) => !x);
        setDarkTheme((x) => !x);
      }}
    >
      <Icon icon="ic:baseline-dark-mode" />
      <div className="pin-outer">
        <div className="pin-inner" style={switchOn ? { marginLeft: "40%", marginRight: "0%" } : { marginRight: "40%", marginLeft: "0%" }} />
      </div>
      <Icon icon="ic:outline-light-mode" />
    </div>
  );
}

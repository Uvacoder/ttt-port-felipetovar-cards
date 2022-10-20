import classNames from "classnames";
import "./Tab.scss";

export default function Tab({ label, handler, className }) {

  const tabClass = classNames("tab", className)
  return (
    <div onClick={handler} className={tabClass}>
      {label}
    </div>
  );
}

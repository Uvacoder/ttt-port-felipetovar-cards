import "./ViewHeader.scss";
import { Icon } from "@iconify/react";

export default function ViewHeader({ title, icon }) {
  return (
    <div className="view-header">
      <Icon icon={icon} className="icon" />
      <span className="title">{title}</span>
    </div>
  );
}

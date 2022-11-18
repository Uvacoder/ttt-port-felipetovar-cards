import "./ProfileIcon.scss";
import { Icon } from "@iconify/react";

export default function ProfileIcon({ id, url, network }) {
  return (
    <a href={url} className="profile-icon" target="_blank" rel="noreferrer">
      <Icon className="icon" icon={id} />
      <span className="name">{network}</span>
    </a>
  );
}

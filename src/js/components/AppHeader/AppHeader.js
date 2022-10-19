import "./AppHeader.scss";
import { Icon } from "@iconify/react";

export default function AppHeader() {
  const icons = [
    ["https://github.com/felipetovarhenao", "ant-design:github-outlined"],
    ["https://soundcloud.com/felipetovarhenao", "ri:soundcloud-fill"],
    ["https://www.youtube.com/channel/UC3aVagLgs4lENH6VSgd_O9g", "icomoon-free:youtube"],
  ];
  return (
    <div className="app-header">
      <h1 className="title">Felipe Tovar-Henao</h1>
      <h2 className="subtitle">composer | developer | educator </h2>
      <div className="icons">
        {icons.map((x, i) => (
          <a href={x[0]} target="_blank" rel="noreferrer" key={i}>
            <Icon icon={x[1]} className="material-icons" />
          </a>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import "./NavBar.scss";

export default function NavBar() {
  const links = [
    ["/", "bio", "auto_stories"],
    ["/works", "works", "library_music"],
    ["/listen-watch", "listen/watch", "video_library"],
    ["/software", "software", "code"],
    ["/contact", "contact", "alternate_email"],
  ];
  return (
    <div className="navbar">
      <AppHeader />
      <div className="links">
        {links.map((x, i) => (
          <Link className="navbar-link" to={x[0]} key={i}>
            <span className="material-icons">{x[2]}</span>
            <span className="label">{x[1]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

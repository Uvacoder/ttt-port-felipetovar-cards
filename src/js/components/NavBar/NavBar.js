import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import AppHeader from "../AppHeader/AppHeader";
import "./NavBar.scss";

export default function NavBar() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const links = [
    ["/", "bio", "auto_stories"],
    ["/works", "works", "library_music"],
    ["/listen-watch", "listen/watch", "video_library"],
    ["/software", "code", "code"],
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
      <div className="theme-switch" onClick={() => setDarkTheme((x) => !x)}>{darkTheme ? "light" : "dark"} theme</div>
    </div>
  );
}

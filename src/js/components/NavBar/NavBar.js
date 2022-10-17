import { Link } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <AppHeader />
      <div className="links">
        <Link className={"navbar-link"} to="/">
          Bio
        </Link>
        <Link className={"navbar-link"} to="/works">
          Works
        </Link>
        <Link className={"navbar-link"} to="/listen-watch">
          Listen/Watch
        </Link>
        <Link className={"navbar-link"} to="/software">
          Software
        </Link>
        <Link className={"navbar-link"} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

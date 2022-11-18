import "./NavBar.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
export default function NavBar() {
  return (
    <div className="navbar">
      <ThemeSwitch />
    </div>
  );
}

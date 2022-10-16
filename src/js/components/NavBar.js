import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Bio</Link>
      <Link to="/works">Works</Link>
      <Link to="/listen-watch">Listen/Watch</Link>
      <Link to="/software">Software</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

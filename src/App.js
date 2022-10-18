/* react */

/* components */
import NavBar from "./js/components/NavBar/NavBar";
import MainView from "./js/components/MainView/MainView";

/* sass */
import "./index.scss";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <MainView />
    </div>
  );
}

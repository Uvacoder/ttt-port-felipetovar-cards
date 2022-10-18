/* react */

/* components */
import NavBar from "./js/components/NavBar/NavBar";
import MainView from "./js/components/MainView/MainView";
import { ThemeContext } from "./js/contexts/ThemeContext";

/* sass */
import "./index.scss";
import classNames from "classnames";
import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const appClass = classNames("app", { dark: darkTheme });

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={appClass}>
        <NavBar />
        <MainView />
      </div>
    </ThemeContext.Provider>
  );
}

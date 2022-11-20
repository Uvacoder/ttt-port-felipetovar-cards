/* react */

/* components */
import { ThemeContext } from "./js/contexts/ThemeContext";
import { ParallaxProvider } from "react-scroll-parallax";
import HomeView from "./js/views/HomeView/HomeView";
import NavBar from "./js/components/NavBar/NavBar";
import WorksView from "./js/views/WorksView/WorksView";
import SoftwareView from "./js/views/SoftwareView/SoftwareView";
import cv from "./json/cv.json";
import works from "./json/work-catalog.json";

/* sass */
import "./index.scss";
import classNames from "classnames";
import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const appClass = classNames("app", { dark: darkTheme });

  return (
    <div className={appClass}>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <ParallaxProvider>
          <NavBar />
          <HomeView cv={cv} />
          <WorksView works={works} />
          <SoftwareView cv={cv} />
        </ParallaxProvider>
      </ThemeContext.Provider>
    </div>
  );
}

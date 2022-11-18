/* react */

/* components */
import { ThemeContext } from "./js/contexts/ThemeContext";
import { ParallaxProvider } from "react-scroll-parallax";
import HomeView from "./js/views/HomeView/HomeView";
import NavBar from "./js/components/NavBar/NavBar";

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
          <HomeView />
        </ParallaxProvider>
      </ThemeContext.Provider>
    </div>
  );
}

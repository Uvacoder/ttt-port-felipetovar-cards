/* react */

/* components */
import { ThemeContext } from "./js/contexts/ThemeContext";
import { ParallaxProvider } from "react-scroll-parallax";

/* sass */
import "./index.scss";
import classNames from "classnames";
import { useState } from "react";
import HomeView from "./js/views/HomeView/HomeView";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const appClass = classNames("app", { dark: darkTheme });

  return (
    <div className={appClass}>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <ParallaxProvider>
          <HomeView />
        </ParallaxProvider>
      </ThemeContext.Provider>
    </div>
  );
}

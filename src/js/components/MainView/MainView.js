/* react */
import { Routes, Route } from "react-router-dom";

/* components */
import BioView from "../views/BioView";
import ListenWatchView from "../views/ListenWatchView";
import SoftwareView from "../views/SoftwareView";
import ViewTemplate from "../views/ViewTemplate/ViewTemplate";
import WorksView from "../views/WorksView/WorksView";
import ContactView from "../views/ContactView";

import "./MainView.scss";

export default function MainView() {
  const routeMap = {
    bio: {
      header: "Bio",
      element: <BioView />,
      path: "/",
    },
    listenWatch: {
      header: "Listen/Watch",
      element: <ListenWatchView />,
      path: "/listen-watch",
    },
    software: {
      header: "Software",
      element: <SoftwareView />,
      path: "/software",
    },
    works: {
      header: "Works",
      element: <WorksView />,
      path: "/works",
    },
    contact: {
      header: "Contact",
      element: <ContactView />,
      path: "/contact",
    },
  };

  return (
    <div className="main-view">
      <Routes>
        {Object.keys(routeMap).map((k) => {
          const map = routeMap[k];
          return (
            <Route
              key={k}
              path={map.path}
              element={
                <ViewTemplate key={`view-${k}`} header={map.header}>
                  {map.element}
                </ViewTemplate>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

import "./HomeView.scss";
import cv from "../../../json/cv.json";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";

export default function HomeView() {
  const iconMap = {
    github: "mdi:github",
    soundcloud: "grommet-icons:soundcloud",
    youtube: "mdi:youtube",
    linkedin: "mdi:linkedin",
    gmail: "bxl:gmail",
  };
  const basics = cv.basics;
  return (
    <div className="home-view">
      <div className="header">
        {/* <img src={basics.image} alt="headshot" className="headshot" /> */}
        <div className="text">
          <h1 className="name">{basics.name}</h1>
          <h2 className="labels">
            <>
              <span className="decorator">{"{"}</span>
              {basics.labels.map((l, i) => (
                <>
                  <span className="label" key={`label-${i}`}>
                    {l}
                  </span>
                  {i < basics.labels.length - 1 && (
                    <span className="decorator" key={`decorator-${i}`}>
                      +
                    </span>
                  )}
                </>
              ))}
              <span className="decorator">{"}"}</span>
            </>
          </h2>
        </div>
        <div className="profiles">
          {basics.profiles.map((p, i) => (
            <ProfileIcon key={i} url={p.url} id={iconMap[p.network.toLowerCase()]} network={p.network}/>
          ))}
        </div>
      </div>
      {/* <div className="bio">
        {basics.summary.map((p, i) => (
          <p key={i} className="p">
            {p}
          </p>
        ))}
      </div> */}
    </div>
  );
}

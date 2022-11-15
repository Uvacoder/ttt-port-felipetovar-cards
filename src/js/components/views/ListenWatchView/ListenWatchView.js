import "./ListenWatchView.scss";
import jsonPortfolio from "../../../../json/work-catalog.json";
import formatDate from "../../../utils/formatDate";
import YouTubePlayer from "../../YouTubePlayer/YouTubePlayer";

export default function ListenWatchView() {
  const works = Object.entries(jsonPortfolio);
  works.shift();
  const audioRecordings = [];
  const videoRecordings = [];
  const media = works.forEach((x, i) => {
    const info = x[1];
    const title = `${x[0]} (${x[1].year}) ${x[1].subtitle}`;
    const performances = Object.entries(info.performances).forEach((y, j) => {
      const audioURL = y[1].audio;
      const videoURL = y[1].video;
      audioURL &&
        audioRecordings.push(
          // <iframe
          //   src={audioURL}
          //   title={`${title} [${formatDate(y)}] audio`}
          //   scrolling="no"
          //   frameBorder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //   allowFullScreen
          // />
        );
      videoURL &&
        videoRecordings.push(
          // <div className="frame">
            <YouTubePlayer id={videoURL} title={`${title} [${formatDate(y)}] video`} />
          // </div>
        );
    });
  });
  return (
    <div className="listen-watch-view">
      {videoRecordings}
      {/* {audioRecordings} */}
    </div>
  );
}

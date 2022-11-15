import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./YouTubePlayer.scss";

export default function YouTubePlayer({ id, title }) {
  return (
    <div className="youtube-player">
      <LiteYouTubeEmbed id={id} title={title} iframeClass="youtube-player"/>
    </div>
  );
}

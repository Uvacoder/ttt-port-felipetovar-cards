import "./Avatar.scss";

export default function Avatar({ url }) {
  return (
    <div className="avatar">
      <div className="avatar-inner">
        <img src={url} alt="headshot" className="img" />
      </div>
      <div className="blocks">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`block ${i}`} />
        ))}
      </div>
    </div>
  );
}

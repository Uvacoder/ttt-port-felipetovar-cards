export default function PerformerList({ performers }) {
  return Object.keys(performers).map((k, i) => {
    return (
      <div key={i}>
        • <span className="performer">{k}</span>, <span className="role">{performers[k]}.</span>
      </div>
    );
  });
}

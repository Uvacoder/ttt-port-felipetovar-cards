export default function InstrumentList({ instruments }) {
  return (
    <div className="instrument-list">
      {instruments.map((x, i) => (
        <span key={i} className="instrument-abbr">
          {x}
        </span>
      ))}
    </div>
  );
}

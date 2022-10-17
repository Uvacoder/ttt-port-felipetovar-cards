import PerformerList from "./PerformerList";

export default function Performances({ performances }) {
  const keys = Object.keys(performances);
  return (
    <div>
      {keys
        .sort((a, b) => new Date(b) - new Date(a))
        .map((k, i) => {
          const p = performances[k];
          const event = <span className="event">{p.event}</span>;
          const venue = <span className="venue">{p.venue}</span>;
          const city = <span className="city">{p.city}</span>;
          const country = <span className="country">{p.country}</span>;
          const performers = <PerformerList performers={p.performers} />;
          return (
            <div key={i} className="performance">
              {event} {i === keys.length - 1 && "(premiere)"} @ {venue}. {city}. {country}
              <div className="performers">
                {performers}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default function Performances({ performances }) {
  return (
    <div>
      {Object.keys(performances)
        .sort((a, b) => new Date(b) - new Date(a))
        .map((k, i) => {
          const p = performances[k];
          return (
            <div key={i}>
              <div>{k}</div>
              <div>{p.city}</div>
            </div>
          );
        })}
    </div>
  );
}

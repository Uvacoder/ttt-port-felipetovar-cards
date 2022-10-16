export default function ViewTemplate({ header, children }) {
  return (
    <div>
      <h2>{header}</h2>
      <div>{children}</div>
    </div>
  );
}

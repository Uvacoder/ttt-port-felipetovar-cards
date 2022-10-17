export default function kv({ k, v }) {
  return (
    <>
      <div className="key">{k}</div>
      <div className="value">{v}</div>
    </>
  );
}

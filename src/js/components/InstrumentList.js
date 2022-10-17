export default function InstrumentList({ instruments }) {
  return instruments.map((x, i) => <span key={i} className='instrument-abbr'>{x}</span>);
}

import isNull from "../utils/isNull";
import InstrumentList from "./InstrumentList";
import Performances from "./Performances";
import KeyValue from "./KeyValue";

export default function WorkCardDetails({ work }) {
  return (
    <div className="work-card-details">
      {!isNull(work.commission) && <div>{work.commission}</div>}
      <KeyValue k={"instrumentation"} v={<InstrumentList instruments={work.instrumentation} />} />
      {!isNull(work.awards) && <KeyValue k={"awards"} v={work.awards} />}
      {!isNull(work.performances) && <KeyValue k={"performances"} v={<Performances performances={work.performances} />} />}
    </div>
  );
}

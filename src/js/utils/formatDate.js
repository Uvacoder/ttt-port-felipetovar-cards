const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

function parseDate(date) {
  return {
    year: parseInt(date.slice(0, 4)),
    month: months[parseInt(date.slice(5, 7)) - 1],
    day: parseInt(date.slice(8, 10)),
  };
}

export function dateRange(a, b) {
  const d1 = parseDate(a);
  const d2 = parseDate(b);
  const withYear = !(d1.year === d2.year);
  const withMonth = !(d1.month === d2.month);
  const withDay = !(d1.day === d2.day);
  const left = dateToString(d1, withYear, true, withDay);
  const right = dateToString(d2, true, withMonth, true);
  return `${left.length > 0 && `${left} – `}${right}`;
}

function dateToString(d, withYear = true, withMonth = true, withDay = true) {
  const year = withYear ? d.year : "";
  const month = withMonth ? d.month : "";
  const day = withDay ? d.day : "";
  return `${month + (withDay ? " " : "")}${day}${(withDay || withMonth) && withYear ? ", " : ""}${year}`;
}

export default function formatDate(date, withYear = true, withMonth = true, withDay = true) {
  const d = parseDate(date);
  return dateToString(d, withYear, withMonth, withDay);
}

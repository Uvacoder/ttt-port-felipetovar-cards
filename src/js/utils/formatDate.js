export default function formatDate(date, withYear = true, withMonth = true, withDay = true) {
  const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  const year = withYear ? parseInt(date.slice(0, 4)) : "";
  const month = withMonth ? months[parseInt(date.slice(5, 7)) - 1] : "";
  const day = withDay ? parseInt(date.slice(8, 10)) : "";

  return `${month + (withDay ? " " : "")}${day}${(withDay || withMonth) && withYear ? ", " : ""}${year}`;
}

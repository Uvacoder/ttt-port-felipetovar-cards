export default function formatDate(date) {
  const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  const year = parseInt(date.slice(0, 4));
  const month = months[parseInt(date.slice(5, 7)) - 1];
  const day = parseInt(date.slice(8, 10));
  return `${month} ${day}, ${year}`;
}

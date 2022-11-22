export default function sortByDateString(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    const dates = [];
    [a, b].forEach((x) => {
      dates.push(parseInt(x.slice(0, 4)) * 356 + parseInt(x.slice(5, 7)) * 31 + parseInt(x.slice(8, 10)));
    });
    return dates[1] - dates[0];
  }
  return 0;
}

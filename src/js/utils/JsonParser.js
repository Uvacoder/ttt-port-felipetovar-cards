export default class JsonParser {
  constructor() {
    this.months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  }

  belongs(elem, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (elem === arr[i]) {
        return true;
      }
    }
    return false;
  }

  parseDateString(date) {
    return {
      year: parseInt(date.slice(0, 4)),
      month: this.months[parseInt(date.slice(5, 7)) - 1],
      day: parseInt(date.slice(8, 10)),
    };
  }

  dateString;

  sortObjectByDate(object, field = "date") {
    const entries = Object.entries(object).sort((a, b) => {
      let x = a[1][field];
      let y = b[1][field];
      if (typeof a === "object" && typeof b === "object") {
        x = Math.max(...x);
        y = Math.max(...y);
      } else if (typeof a === "string" && typeof b === "string") {
        x = this.parseDateString(x);
        y = this.parseDateString(y);
        x = x.year * 365 + x.month * 30 + x.day;
        y = y.year * 365 + y.month * 30 + y.day;
      }
      return y - x;
    });
    return entries;
  }

  bold(x) {
    return <b>{x}</b>;
  }

  italics(x) {
    return <i>{x}</i>;
  }

  parseObject(object, options) {
    const keys = Object.keys(object);
    keys.map((k, i) => {});
  }
}

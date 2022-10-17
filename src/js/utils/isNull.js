export default function isNull(x) {
  if (Array.isArray(x) && x.length === 0) {
    return true;
  } else if (x instanceof String && x === "") {
    return true;
  } else if (x instanceof Object && Object.keys(x).length === 0) {
    return true;
  } else {
    return false;
  }
}

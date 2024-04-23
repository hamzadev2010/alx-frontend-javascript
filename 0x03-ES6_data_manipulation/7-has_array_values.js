export default function hasValuesFromArray(set, values) {
  for (const item of values) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}

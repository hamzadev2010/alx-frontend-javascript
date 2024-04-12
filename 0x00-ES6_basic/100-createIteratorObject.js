export default function createIteratorObject(report) {
  const result = [];
  for (const department of Object.values(report.allEmployees)) {
    for (const employees of department) {
      result.push(employees);
    }
  }
  return result;
}

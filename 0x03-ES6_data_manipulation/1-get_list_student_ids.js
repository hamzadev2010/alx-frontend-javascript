export default function getListStudentIds(std) {
  if (Array.isArray(std)) {
    return std.map((liststd) => liststd.id);
  }
  return [];
}

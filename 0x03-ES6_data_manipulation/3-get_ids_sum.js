function getStudentIdsSum(students) {
  const allValue = students.reduce((std, stu) => std + stu.id, 0);
  return alllValue;
}

export default getStudentIdsSum;


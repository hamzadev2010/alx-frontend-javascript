const updateStudentGradeByCity = (students, city, newGrades) => {
  const updatedStudents = students.map((student) => {
    if (student.location === city) {
      const sameGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchingGrade) {
        return { ...student, grade: sameGrade.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    } else {
      return student;
    }
  });
  return updatedStudents;
};

export default updateStudentGradeByCity;

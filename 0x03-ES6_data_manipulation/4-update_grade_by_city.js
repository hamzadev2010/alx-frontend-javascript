const updateStudentGradeByCity = (studentsList, city, newGrades) => {
  return studentsList.map((student) => {
    if (student.location === city) {
      const sameGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (sameGrade) {
        return { ...student, grade: sameGrade.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    } else {
      return student;
    }
  });
};

export default updateStudentGradeByCity;

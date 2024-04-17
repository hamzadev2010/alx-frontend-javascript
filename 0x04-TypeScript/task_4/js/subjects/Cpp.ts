namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
    firstName: string;
  }

  export class Cpp {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const xpe = this.teacher.experienceTeachingC || 0;
      if (xpe > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

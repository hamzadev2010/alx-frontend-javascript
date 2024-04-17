namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
    firstName: string;
  }

  export class Java {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const xpe = this.teacher.experienceTeachingJava || 0;
      return xpe > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}

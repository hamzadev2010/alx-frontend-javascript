namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
    firstName: string;
  }

  export class React {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const xpe = this.teacher.experienceTeachingReact || 0;
      return xpe > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}


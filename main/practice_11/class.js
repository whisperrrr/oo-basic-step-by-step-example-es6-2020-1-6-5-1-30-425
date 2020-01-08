import Student from "../../main/practice_11/student.js";
class Class {
  constructor(number,leader) {
    this.number = number;
  }
  getDisplayName() {
    return "Class " + this.number;
  }
  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
      if (this.teacher) {
        return "I am " + this.teacher.name + " I know " + student.name + " become Leader of Class " + this.number + ".";
      }
    }
    else {
      console.log("It is not one of us.");
    }
  }
  appendMember(student) {
    student.klass = this;
    if (this.teacher) {
      return "I am " + this.teacher.name + " I know " + student.name + " has joined Class " + this.number + ".";
    }
  }
  isIn(student) {
    if (student.klass === this) {
      return true;
    }
    return false;
  }
  registerAssignLeaderListener(teacher) {
    this.teacher = teacher;
  }
  registerJoinListener(teacher) {
    this.teacher = teacher;
  }
}
export default Class;

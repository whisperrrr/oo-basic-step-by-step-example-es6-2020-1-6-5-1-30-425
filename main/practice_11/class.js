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
      //看这个班有没有teacher,再看leader的班级在不在这个老师的班级内
      if (this.teacher && inSameClass(this.teacher,student)) {
        console.log("I am " + this.teacher.name + ". I know " + student.name + " become Leader of Class " + student.klass.number + ".")
      }
    }
    else {
      console.log("It is not one of us.");
    }
  }
  appendMember(student) {
    student.klass = this;
    // if (this.teacher && inSameClass(this.teacher,student)) {
    //   console.log("I am " + this.teacher.name + " I know " + student.name + " has joined Class " + student.klass.number + ".");
    // }
    if (this.teacher && (this.teacher.klasses[0] === student.klass 
      || this.teacher.klasses[1] === student.klass)) {
      console.log("I am " + this.teacher.name + ". I know " + student.name + " has joined Class " + student.klass.number + ".")
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
function inSameClass(teacher,student) {
  for (let klass of teacher.klasses) {
    if (student.klass.number === klass.number) {
      return true;
    }
  }
  return false;
}
export default Class;

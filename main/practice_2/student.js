import Person from "../../main/practice_2/person.js";

class Student extends Person {
  constructor(name,age,klass) {
    super(name,age);
    this.klass = 2;
  }
  introduce() {
    return "I am a Student. I am at Class " + this.klass + ".";
  }
}

export default Student;

import Person from "../../main/practice_10/person.js";
import Class from "../../main/practice_10/class.js";

class Teacher extends Person {
  constructor(id,name,age,klasses) {
    super(id,name,age);
    this.klasses = klasses;
    if (klasses) {
      this.klasses.length = klasses.length;
    }
  }
  introduce() {
    if (this.klasses) {
      return super.introduce() + " I am a Teacher. I teach Class " + getClassNumber(this.klasses) + ".";
    }
    else {
      return super.introduce() + " I am a Teacher. "+ "I teach No Class.";
    }   
  }
}

function getClassNumber(klasses) {
  let klassNum = [];
  for (let klass of klasses) {
    klassNum.push(klass.number);
  }
  klassNum = klassNum.join(", ");
  return klassNum;
}

export default Teacher;
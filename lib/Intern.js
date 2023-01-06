const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, empId, email, school) {
        super(name, empId, email);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getEmpRole() {
        return "Intern"
    }
}
module.exports = Intern;
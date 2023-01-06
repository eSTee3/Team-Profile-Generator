const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, empId, email, officeNum) {
        super (name, empId, email);
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum
    }
    getEmpRole() {
        return "Manager"
    }
}
module.exports = Manager
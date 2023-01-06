const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, empId, email, githubId) {
        super (name, empId, email);
        this.githubId = githubId;
    }
    getGithubId() {
        return this.githubId
    }
    getEmpRole() {
        return "Engineer"
    }
}
module.exports = Engineer;
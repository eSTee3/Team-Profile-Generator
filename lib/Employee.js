class Employee {
    constructor (name, empId, email){
        this.name = name;
        this.empId = empId;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getEmpId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;
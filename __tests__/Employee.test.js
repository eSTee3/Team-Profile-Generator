const Employee = require("../lib/Employee");

test("Create employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Employee Name", () => {
    const name = "Spongebob";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Employee ID", () => {
    const empId = 42;
    const employeeInstance = new Employee("Spongebob", empId);
    expect(employeeInstance.empId).toBe(empId);
})

test("Employee eMail.", () => {
    const email = "sbsp@bikinibottom.net";
    const employeeInstance = new Employee("Spongebob", 42, email);
    expect(employeeInstance.email).toBe(email);
})

test("Role Test", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Spongebob", 42, "sbsp@bikinibottom.net");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
})


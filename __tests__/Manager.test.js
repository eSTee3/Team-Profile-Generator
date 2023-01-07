const Manager = require("../lib/Manager");

test("Create GitHub", () => {
    const officeNum = "555-BIK-BOT";
    const employeeInstance = new Manager("Spongebob", 42, "sbsp@bikinibottom.net", officeNum);
    expect(employeeInstance.officeNum).toBe(officeNum);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Spongebob", 42, "sbsp@bikinibottom.net", "555-BIK-BOT");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
});
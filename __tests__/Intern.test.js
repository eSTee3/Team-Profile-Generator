const Intern = require("../lib/Intern");

test("Create GitHub", () => {
    const school = "U of BB";
    const employeeInstance = new Intern("Spongebob", 42, "sbsp@bikinibottom.net", school);
    expect(employeeInstance.school).toBe(school);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Spongebob", 42, "sbsp@bikinibottom.net", "U of BB");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
});
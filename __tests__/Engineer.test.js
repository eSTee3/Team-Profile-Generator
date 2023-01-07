const Engineer = require("../lib/Engineer");

test("Create GitHub", () => {
    const githubId = "Spongy42";
    const employeeInstance = new Engineer("Spongebob", 42, "sbsp@bikinibottom.net", githubId);
    expect(employeeInstance.githubId).toBe(githubId);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Spongebob", 42, "sbsp@bikinibottom.net", "Spongy42");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
});
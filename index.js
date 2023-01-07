// Adds requirements for all libraries
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Add requirement for the inquirer and file system libraries
const inquirer = require("inquirer");
const fs = require("fs");

// Location of template to use for HTML creation
const teamTemplate = require("./src/teamTemplate.js");

// Create array with all entered information
empArray = [];


function runApplication() {
    function buildTeam() {
        inquirer.prompt([{

            type: "list",
            message: "Please choose the type of employee you're adding to the team:",
            name: "empType",
            choices: ["Engineer", "Intern", "Manager", "I'm done!"]

        }]).then(function (userInput) {
            switch(userInput.empType) {
                case "Manager":
                    newMgr();
                    break;
                case "Engineer":
                    newEng();
                    break;
                case "Intern":
                    newInt();
                    break;
                // This will create the HTML if Engineer, Intern or Manager are not chosen.
                default:
                    createHTML();
            }
        })
    }
    function buildRestOfTeam() {
        inquirer.prompt([{

            type: "list",
            message: "Please choose the type of employee you're adding to the team:",
            name: "empType",
            choices: ["Engineer", "Intern", "I'm done!"]

        }]).then(function (userInput) {
            switch(userInput.empType) {
                case "Engineer":
                    newEng();
                    break;
                case "Intern":
                    newInt();
                    break;
                // This will create the HTML if Engineer, Intern or Manager are not chosen.
                default:
                    createHTML();
            }
        })
    }

    function newMgr() {
        inquirer.prompt([
        {
            type: "input",
            name: "mgrName",
            message: "Manager Name:"
        },
        {
            type: "input",
            name: "mgrId",
            message: "Manager ID:"
        },
        {
            type: "input",
            name: "mgrEmail",
            message: "Manager eMail:"
        },
        {
            type: "input",
            name: "mgrPhone",
            message: "Manager Phone Number:"
        }

        ]).then(detail => {
            const manager = new Manager(detail.mgrName, detail.mgrId, detail.mgrEmail, detail.mgrPhone);
            empArray.push(manager);
            buildRestOfTeam();
        });
    }

    function newEng() {
        inquirer.prompt([{
            type: "input",
            name: "engName",
            message: "Engineer Name:"
        },
        {
            type: "input",
            name: "engId",
            message: "Engineer ID:"
        },
        {
            type: "input",
            name: "engEmail",
            message: "Engineer eMail:"
        },
        {
            type: "input",
            name: "engGitHub",
            message: "Engineer GitHub Username:"
        }

        ]).then(detail => {
            const engineer = new Engineer(detail.engName, detail.engId, detail.engEmail, detail.engGitHub);
            empArray.push(engineer);
            buildTeam();
        });
    }

    function newInt() {
        inquirer.prompt([{
            type: "input",
            name: "intName",
            message: "Intern Name:"
        },
        {
            type: "input",
            name: "intId",
            message: "Intern ID:"
        },
        {
            type: "input",
            name: "intEmail",
            message: "Intern eMail:"
        },
        {
            type: "input",
            name: "intSchool",
            message: "Intern School:"
        }

        ]).then(detail => {
            const intern = new Intern(detail.intName, detail.intId, detail.intEmail, detail.intSchool);
            empArray.push(intern);
            buildTeam();
        });
    }

    function createHTML() {
        
        fs.writeFileSync("./dist/MyTeam.html", teamTemplate(empArray), "UTF-8");
        console.log("-------------------------------------------");
        console.log("Thank you!, your team page has been created.");
        console.log("It's been coded into a file called");
        console.log("'MyTeam.html' within the 'dist' folder.");
    }

    buildTeam();
}

runApplication();
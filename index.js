// Adds requirements for all libraries
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Add requirement for the inquirer and file system libraries
const inquirer = require("inquirer");
const fs = require("fs");

// Location of template to use for HTML creation
const teamTemplate = require("./src/template.js");

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

function newMgr() {
    inquirer.prompt([{
        type: "input",
        name: "mgrName",
        message: "Manager's Name:"
    },
    {
        type: "input",
        name: "mgrId",
        message: "Manager's ID:"
    },
    {
        type: "input",
        name: "mgrEmail",
        message: "Manager's eMail:"
    },
    {
        type: "input",
        name: "mgrPhone",
        message: "Manager's Phone Number:"
    }

    ]).then(detail => {
        const manager = new Manager(detail.mgrName, detail.mgrId, detail.mgrEmail, detail.mgrPhone);
        empArray.push(manager);
        buildTeam();
    });
}

function newEng() {
    inquirer.prompt([{
        type: "input",
        name: "engName",
        message: "Engineer's Name:"
    },
    {
        type: "input",
        name: "engId",
        message: "Engineer's ID:"
    },
    {
        type: "input",
        name: "engEmail",
        message: "Engineer's eMail:"
    },
    {
        type: "input",
        name: "engGitHub",
        message: "Engineer's GitHub Username:"
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
        message: "Intern's Name:"
    },
    {
        type: "input",
        name: "intId",
        message: "Intern's ID:"
    },
    {
        type: "input",
        name: "intEmail",
        message: "Intern's eMail:"
    },
    {
        type: "input",
        name: "intSchool",
        message: "Intern's School:"
    }

    ]).then(detail => {
        const intern = new Intern(detail.intName, detail.intId, detail.intEmail, detail.intSchool);
        empArray.push(intern);
        buildTeam();
    });
}

function createHTML() {
    
    fs.writeFile("./dist/index.html", teamTemplate(empArray), "UTF-8");
    console.log("Your team page has been created.");
}

buildTeam();

}

runApplication();
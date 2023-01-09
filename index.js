// Adds requirements for all libraries
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Add requirement for the inquirer and file system libraries
const inquirer = require("inquirer");
const fs = require("fs");

// Location of template to use for HTML creation
const teamTemplate = require("./src/teamTemplate.js");

// Create array with all entered information to be used in the creation of the HTML page
empArray = [];
// Create an array (of a single item) to be used in the naming of the file
fileName = [];


function runApplication() {

    // Function to build team members (including Manager)
    function buildTeam() {
        inquirer.prompt([{

            type: "list",
            message: "Does your team have a Manager?",
            name: "empType",
            choices: ["Yes, there's a Manager", "No, there's not a Manager"]

        }]).then(function (userInput) {
            switch(userInput.empType) {
                case "Yes, there's a Manager":
                    newMgr();
                    break;
                // This will create the HTML if something other than "Engineer", "Intern" or "Manager" is chosen.
                default:
                    buildRestOfTeam();
            }
        })
    }
    // Function used, if Manager is selected (it excludes manager from the future list of options)
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
                    teamName();
            }
        })
    }

    // Builds an array of data for a Manager, based off the end-user's inputs
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

    // Builds an array of data for an Engineer, based off the end-user's inputs
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
            buildRestOfTeam();
        });
    }

    // Builds an array of data for an Intern, based off the end-user's inputs
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
            buildRestOfTeam();
        });
    }

    // Function to get the team's name from the end user to use in the file naming and web page header!!!!
    function teamName() {
        inquirer.prompt([{
            type: "input",
            name: "file",
            message: "Please Enter a Name for this Team:"
        }

    ]).then(detail => {
        const filename = (detail.file);
        fileName.push(filename);
        createHTML();
    });
    }
    

    // Function that creates the HTML file (utilizing the teample) and then notifies the end user of it's completion and it's location
    function createHTML() {
        
        fs.writeFileSync(`./dist/${fileName}.html`, teamTemplate(empArray), "UTF-8");
        console.log("-------------------------------------------");
        console.log("Thank you!, your team page has been created.");
        console.log("It's been coded into a file called");
        // Names the file using the end user's input for team name
        console.log(`'${fileName}.html' within the 'dist' folder.`);
    }

    buildTeam();
}

runApplication();

const teamTemplate = team => {
    // Creates a div for each Manager
    const createManager = manager => {
        return `<div class="card empCard">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getEmpRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getEmpId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNum()}</li>
            </ul>
        </div>
    </div>
            `;
        };

        // Creates a div for each Engineer
        const createEngineer = engineer => {
            return `
    <div class="card empCard">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getEmpRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getEmpId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithubId()}" target="_blank" rel="noopener noreferrer">${engineer.getGithubId()}</a></li>
            </ul>
        </div>
    </div>
            `;
        };
    
        // Creates a div for each Intern entered
        const createIntern = intern => {
            return `
    <div class="card empCard">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getEmpRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getEmpId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
            `;
        };

    const html = [];

    // Concatenates all divs (above) for all members of the team, placing the manager(s) first, followed by engineers and the interns
    html.push(team
        .filter(employee => employee.getEmpRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getEmpRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getEmpRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");    
}


// export function to generate entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        .empCard {
            box-shadow: 10px 10px 25px rgb(67, 67, 67);
            margin: 10px;
            border-radius: 20px;
        }
    </style>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 bg-success">
                <h1 class="text-center text-white">Team ${fileName}</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row col-12 d-flex justify-content-center">
                ${teamTemplate(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

/* const generateTeamMembers = team => {

    const generateManager = function (manager) {
        return `
        <div class="card employee-card">
            <div class="card-header>
                <h2 class="card-title"> ${manager.name} </h2>
                <h3 class="card-title"> ${manager.role} </h3>
            </div>
        </div>
        <div class="card-body"> 
            <p> ${manager.email} </p>
        </div>

        `
    }
} */


function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
      </head>

      <body>
        <header>
            <h1> My Team </h1>
        </header>

        <div class="card employee-card">
            <div class="card-header>
                <h2 class="card-title"> ${data.managerName} </h2>
                <h3 class="card-title">Manager</h3>
            </div>
        </div>
        <div class="card-body"> 
            <p> ${data.managerEmail} </p>
        </div>
      </body>

    </html>
    `
};

module.exports = generateHTML;
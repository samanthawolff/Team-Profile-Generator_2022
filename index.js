// Require page that generated HTML
const generateHTML = require('./src/generateHTML');

// Require modules
const fs = require('fs');
const inquirer = require('inquirer');

// Require team members
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Empty team array
const teamMembers = []


// Creates an array of questions for user input
const teamManager = () => {
    return inquirer.prompt([

        // Manager name question
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name!')
                    return false;
                };
            },
        },

        // Manager ID question
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the managers ID!')
                    return false;
                };
            },
        },

        // Manager Email question
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers Email?',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the managers Email!')
                    return false;
                };
            },
        },

        // Manager office number question
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the managers office number!')
                    return false;
                };
            },
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamMembers.push(manager);
    });
};


const teamEmployee = () => {
    console.log(`
    =============
    Add Employees
    =============
    `);

    return inquirer.prompt ([

        {
            type: 'checkbox',
            name: 'role',
            message: 'Please choose the role of your employee:',
            choices: ['Intern', 'Engineer']
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log('Please enter the employees name!')
                    return false;
                };
            },
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the employees ID?',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employees ID!')
                    return false;
                };
            },
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the employees Email?",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the employees Email!')
                    return false;
                };
            },
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username?',
            validate: employeeGithubInput => {
                if (employeeGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the employees GitHub username!')
                    return false;
                };
            },
        },

        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the interns school?',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('Please enter the interns school name!')
                    return false;
                };
            },
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(employeeInput => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeInput;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "intern") {
            employee = new Intern (name, id, email, school);
        };

        teamMembers.push(employee);

        if (confirmAddEmployee) {
            return teamEmployee(teamMembers);
        } else {
            return teamMembers
        };
    });
};

teamManager()
.then(teamEmployee);

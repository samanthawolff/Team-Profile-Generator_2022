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
        }
    ])
}

teamManager()
.then(teamEmployee);

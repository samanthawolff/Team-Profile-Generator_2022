// Require page that generated HTML
const generateHTML = require('./src/generateHTML.js');
const { writeFile, copyFile} = require('./src/generate-site.js');

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
            name: 'managerName',
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
            name: 'managerId',
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
            name: 'managerEmail',
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
}; 


const teamEmployee = () => {
    console.log(`
    =============
    Add Employees
    =============
    `);

    return inquirer.prompt ([

        // Confirm engineer question
        {
            type: 'confirm',
            name: 'confirmEngineer',
            message: 'Is your employee an Engineer?',
            default: false
        },

        // Confirm intern question
        {
            type: 'confirm',
            name: 'confirmIntern',
            message: 'Is your employee an Intern?',
            default: false
        },

        // Employee name question
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

        // Employee ID question
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

        // Employee Email question
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

        // Engineer GitHub question
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username?',
            when: ({confirmEngineer}) => {
                if (confirmEngineer) {
                    return true;
                } else {
                    return false;
                };
            },
        },

        // Intern school question
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the interns school?',
            when: ({confirmIntern}) => {
                if (confirmIntern) {
                    return true;
                } else {
                    return false;
                };
            },
        },

        // Confirm another employee question
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
};


teamManager()
.then(teamEmployee)
.then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
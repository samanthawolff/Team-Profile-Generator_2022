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

const teamManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name?',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name')
                    return false;
                };
            },
        },

        {
            type: 'input',
            name: 'ID',
            message: "What is the managers ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the managers ID')
                    return false;
                };
            },
        },
    ])
}

teamManager();


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
    ]);
}

teamManager();


const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');


const generateHTML= ({...theArgs}) => {
    `<!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta charset="utf-8">
            <title>Read Me Generator</title>
        </head>
        <body>
        </body>
    </html>`
};


const questions = [
{
    type: 'input',
    name: 'Title',
    message: 'Please enter the title to your README.MD',
    validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}},
},
        {

            type: 'input', 
            name: 'Description',
            message:  'Fill in a detailed description of your application. ',
            validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}},
         },
        {
        type: 'input',
        name: 'installation',
        message:  "What are the steps required to install your project?",
        validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}}
        },
        {
        type: 'input', 
        name: 'Usage',
        message: 'Provide instructions for the application.',
        validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}}
        },
        {
    type: 'list',
    name: 'License',
    message:  'Which license did you use?',
    choices: ['The MIT', 'The GPL', 'Apache', 'GNU', 'N/A'],
    validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}}
    },
    {
    type: 'input', 
    name: 'Contributing',
    message: 'Any contributors?',
    validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}}
    },
    {
    type: 'input',
    name: 'Tests', 
    message:  "Provide tests for your application.",
    validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}}
    },
    {
    type: 'input', 
    name: 'Questions',
    message: "Enter contact information for futher questions.",
    validate: (value)  => {if (value) {return true} else {return "Please enter your answer"}},
    }
]


function writetoFile (fileName, data){
    fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('Readme created')
    );
}

function init () {
    inquirer
    .prompt(questions)
    .then((data) => {
writetoFile("generate_README.md", markdown({...data}));
    })
}

init();
// TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app

// img sheilds . io for the badge
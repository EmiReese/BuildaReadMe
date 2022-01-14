const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
// const prompts = require('prompts');
//
var prompt = require('prompt');
prompt.start();
// data = input from users

const questions = [

        {
            type: 'text',
            name: 'Description',
            message:  'Please fill in a detailed description of your application. '
         },
         {
            type: 'multiselect', 
            name: 'Table of Contents',
            message: "If your README is long, add a table of contents to make it easy for users to find what they need. You can select multiple options.",
            choices: [
                {title: 'Installation', value: 'Installation'},
                {title: 'Usage', value: 'Usage'},
                {title: 'Credits', value: 'Credits'},
                {title: 'License', value: 'License'}
            ]
         },
        {
        type: 'text',
        name: 'installation',
        message:  "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },
        {
        type: 'text', 
        name: 'Usage',
        message: 'Please, provide instructions and examples for use of the application.'
        },
        {
    type: 'text',
    name: 'License',
    message:  'Provide a license.'
    
    },
    {
    type: 'text', 
    name: 'Contributing',
    message: 'Name the people or organizations that have contributed to this application.'
    },
    {
    type: 'text',
    name: 'Tests', 
    message:  "Provide tests for your application."
    },
    {
    type: 'text', 
    name: 'Questions',
    message: ""
    }];

    
    prompt.get(questions);

function writetoFile (fileName, data){
    fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('Readme created')
    );
}

function init () {
    inquirer
    .prompt
    .then((data) => {
writetoFile("generate_README.md", markdown({...data}));
    })
}
// TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
// img sheilds . io for the badge
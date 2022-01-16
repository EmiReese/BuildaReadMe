const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');



const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Please enter the title to your README.MD',

},
        {

            type: 'input', 
            name: 'description',
            message:  'Fill in a detailed description of your application.',
           
         },
        {
        type: 'input',
        name: 'installation',
        message:  "What are the steps required to install your project?",
      
        },
        {
        type: 'input', 
        name: 'usage',
        message: 'Provide instructions for the application.',
       
        },
        {
    type: 'list',
    name: 'license',
    message:  'Which license did you use?',
    choices: ['The MIT', 'The GPL', 'Apache', 'GNU', 'N/A'],
   
    },
    {
    type: 'input', 
    name: 'contributing',
    message: 'Any contributors?',
    
    },
    {
    type: 'input',
    name: 'tests', 
    message:  "Provide tests for your application.",
   
    },
    {
    type: 'input', 
    name: 'questions',
    message: "Enter contact information for futher questions.",
    
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


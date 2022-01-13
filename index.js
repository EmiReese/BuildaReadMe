const inquirer = require('inquierer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
//

array of questions 
const questions [{
    key: value;
    type
    name
    message
}]
// data = input from users

fucntion writetoFile (fileName, data){
    fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('Readme created')
    );
}

function int {
    inquierer 
    .prompt
    .then((data) => {
writetoFile("generate_README.md", markdown({...data}));
    })
}
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// img sheilds . io for the badge
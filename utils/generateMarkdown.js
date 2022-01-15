const fs = require('fs');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `https://img.shields.io/github/license/emireese/BuildAReadMe`;
  }
  return ' ';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `![GitHub](https://img.shields.io/github/license/emireese/BuildAReadMe)`;
  }
  return '  ';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`;
  }
  return '';
}

const generateHTML=    `<!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta charset="utf-8">
            <title>Read Me Generator</title>
        </head>
        <body>
        </body>
    </html>`;
 



// const file1 = fs.writeFile(index.html, process.argv[0], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );



// Create a function to generate markdown for README
function generateMarkdown(data) {
  // creating the header
  const header = document.createElement(div);
  // creating the title
  let title = document.createElement(h2);
  //add content 
  title.textContent =  `ReadMe.MD for ${data.title}`;
  //attach title to header
  header.appendChild(title);
//add class to style
  header.classList.add('header');
  //add class to style
  title.classList.add(title);
 //create license section
let licenseEl = document.createElement(p);
licenseEl.textContent = `License:  ${renderLicenseBadge(data.license)}` ;
document.appendChild(licenseEl);
licenseEl.classList.add('licenseSection');
//create description section
let descriptionEl = document.createElement(p);
descriptionEl.textContent = `Description: ${data.description}`;
document.appendChild(descriptionEl);
descriptionEl.classList.add('descriptionSection');
// create table of contents
let tableOfContents = document.createElement(ol);
tableOfContents.textContent = `Table of Contents`;
document.appendChild(tableOfContents);
tableOfContents.classList.add('table');

let installation = document.createElement(li);
installation.textContent = `Installation`;
document.appendChild(installation);
installation.classList.add('listItem');
let instLink = document.createElement(a);
instLink.textContent = `href = "#Installation"`;

let usage = documents.createElement(li); 
usage.textContent = 'Usage';
document.appendChild(usage);
usage.classList.add('listItem');
let usageLink = document.createElement(a);
usageLink.textContent = `href = "#Usage"`;


let contributors = documents.createElement(li); 
contributors.textContent = 'Contributors';
document.appendChild(contributors);
contributors.classList.add('listItem');
let contLink = document.createElement(a);
contLink.textContent = `href = "#Contributors`;

let tests = document.createElement(li);
tests.textContent = 'Tests';
document.appendChild(tests); 
tests.classList.add('listItem');
let testLink = document.createElement(a);
testLink.textContent = `href = "#test`;

let questions = documents.createElement(li); 
questions.textContent = 'Questions';
document.appendChild(questions);
questions.classList.add('listItem');
let quesLink = document.createElement(a);
quesLink.textContent = `href = "#Questions`;

 `## Installation


To install necessary dependencies, run the following command:

${data.installation}

  ## Installation


To install necessary dependencies, run the following command:
  \`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

try {
  fs.writeFileSync('/index.html', generateMarkdown);
  //file written successfully
} catch (err) {
  console.error(err)
}



//This seemed to work better when I called the function
module.exports = generateMarkdown;
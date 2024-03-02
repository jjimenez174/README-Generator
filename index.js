// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
// An array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of the project?"
}, {
    type: "input",
    name: "description",
    message: "A description of your project"
}, {
    type: "input",
    name: "installation",
    message: "Provide step-by-step installation for your project"
}, {
    type: "input",
    name: "usage",
    message: "Please provide the usage information"
}, {
    type: "input",
    name: "contribution",
    message: "Please provide the contribution guidelines"
}, {  
    type: "input",
    name: "test",
    message: "Please provide the test conditions"
}, {
    type: "list",
    name: "license",
    message: "Choice a license for your project",
    choices: ['MIT', 'Apache 2.0', 'None']
}, { 
   type: "input",
   name: "github",
   message: "Please provide your Github user name"
},{
    type: "input",
    name: "email",
    message: "Please provide your email"
},

];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => {
        if (err) {
            console.error("Error:", err);
        } else {
            console.log("Success");
        }
    });
}

// A function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile(response.fileName, response);
        });
}


// Function call to initialize app
init();

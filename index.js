// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input

const questions= [{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Give a short description of the project: "
},
{
   type:"input",
   name: "installation",
   message: "Provide installation information:"
},
{
    type:"input",
    name: "usage",
    message: "Describe how the project is used:"
 },
 {
        type: "list",
        name: "license",
        message: "Pick a license for the project: ",
        choices: ["MIT", "GNU", "Unlicensed", "Apache", "Other"]
 },
 {
    type: "input",
    name: "contributing",
    message: "Who is contributing to the project:"
},
{
    type: "input",
    name: "tests",
    message: "Please provide testing instructions: "  
},
{
    type: "input",
    name: "userName",
    message: "What is your GitHub username?"
},
{
    type: 'input',
    name: 'email',
    message: "What is your email address?"
    
},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, generateMarkdown(data), (err) =>{
    if(err){
        throw new Error(err);
    }
    console.log("File was written successfuly.");
   })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        writeToFile('README-sample.md', response)
    )
}
// Function call to initialize app
init();

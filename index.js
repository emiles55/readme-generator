// TODO: Include packages needed for this application
const inquirer = import('inquirer');
const fs = import('fs');
const generateMarkdown = import("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project title?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
   fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) =>{
    if(err){
        throw new Error(err);
    }
    console.log("File was written successfuly.");
   })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

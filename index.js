// TODO: Include packages needed for this application
const inquirer = import('inquirer');
const fs = import('fs');
const generateMarkdown = import("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
function getQuestions(){
inquirer.prompt( [{
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
    message: "Provide usage information:"
 },
 {
        type: "list",
        name: "license",
        message: "Pick a license for the project: ",
        choices: ["MIT", "GNU GPL v3", "Unlicense", "None"]
 },
])
.then((answer) => {
    console.log("Hello " + answer.user_name);
  });
}
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
getQuestions();

// Function call to initialize app
init();

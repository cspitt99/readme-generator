const inquirer = require("inquirer")
const {generateMarkdown} = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title?"
    }
];

// Title, description, installation instructions, usage information, contribution guidelines, and test instructions, license, Github Username, Email Address

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
}

// Function call to initialize app
init();

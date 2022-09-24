const inquirer = require("inquirer")
const {generateMarkdown} = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title?"
    },
    {
        name: "description",
        type: "input",
        message: "What is the description?"
    },
    {
        name: "installation",
        type: "editor",
        message: "What are the installation instructions?"
    },
    {
        name: "usage",
        type: "editor",
        message: "What is the usage information?"
    },
    {
        name: "contribution",
        type: "input",
        message: "What are the contribution guidelines?"
    },
    {
        name: "test",
        type: "input",
        message: "What are the test instructions?"
    },
    {
        name: "license",
        type: "list",
        message: "What is the license?",
        choices: ["MIT","Apache-2.0","GPL-3.0"]
    },
    {
        name: "username",
        type: "input",
        message: "What is your Github username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?"
    },
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

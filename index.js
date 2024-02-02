const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the usage information:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide the contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide the test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to initialize program
async function init() {
    try {
      // Prompt the user with questions and get their responses
      const userResponses = await inquirer.prompt(questions);
  
      // Generate the markdown content based on user responses
      const markdownContent = generateMarkdown(userResponses);
  
      // Specify the name of the output file (e.g., README.md)
      const outputFileName = "README.md";
  
      // Write the generated markdown to the output file
      writeToFile(outputFileName, markdownContent);
  
      console.log(`Successfully generated ${outputFileName}`);
    } catch (error) {
      console.error("Error during README generation:", error);
    }
}

// function call to initialize program
init();

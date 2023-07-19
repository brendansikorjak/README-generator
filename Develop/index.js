const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the title of your project:",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a brief description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter the installation instructions for your project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage of your project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter the contribution guidelines for your project:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter the test guidelines for your project:",
      name: "tests",
    },
    {
      type: "list",
      message: "Select a license for your project:",
      choices: [
        "MIT License",
        "Apache License 2.0",
        "GNU General Public License v3.0",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "Enter your GitHub username:",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email:",
      name: "email",
    },
  ]);
}

function generateREADME(answers) {
  return `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## License
    ${answers.license}

    ## Questions
    If you have any questions about this project feel free to send me email to the email address below

    Email: ${answers.email}
    Github: https://github.com/${answers.github}
  `;
}

async function init() {
  try {
    const answers = await promptUser();
    const readmeContent = generateREADME(answers);
    fs.writeFileSync("README.md", readmeContent);
    console.log("README.md file successfully generated!");
  } catch (error) {
    console.error("Error generating README:", error);
  }
}

init();

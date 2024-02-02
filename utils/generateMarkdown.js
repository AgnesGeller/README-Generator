// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} License.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions or concerns, please contact me at [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
  `;
}

module.exports = generateMarkdown;

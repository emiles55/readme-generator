// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license=='MIT'){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
}
else if (license=='Apache'){
  return "![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
}
else if(license =="Unlicensed"){
  return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
}
else if(license=="GNU"){
  return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
}
else{
  return "None";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return ''
  } else return `[License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else return `## License
  The following license was used: ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Testing](#tests)


  ## Installation
${data.installation}
## Usage
${data.usage}
## License 
${data.license}
## Contributing 
${data.contributing}
## Tests
${data.tests}
## Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.email}
${renderLicenseSection(data.license)}
`;
}


module.exports = generateMarkdown;

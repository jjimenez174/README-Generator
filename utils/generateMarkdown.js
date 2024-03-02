// If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else {
        return '';
    }
}
 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
} else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
} else {
    return '';
}
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license.`;
} else {
    return '';
}
}

// A function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## Description
${data.description}

## Table of Content
[Installation](#installation)  
[Usage](#usage)  
[Contribution](#contribution)  
[Test](#test)  
[Questions](#questions)  

## Installation
${data.installation}

## Usage
${data.usage}


## Contribution
${data.contribution}

## Tests
${data.test}

## License
${licenseBadge}

${licenseSection}

For more information, visit [License Details](${licenseLink}).

## Questions
Please contact me if there are any questions.

Github Username: [@${data.github}](https://github.com/${data.github})

Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

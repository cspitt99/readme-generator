// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //"MIT","Apache-2.0","GPL-3.0"
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GPL-3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  return ""
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[The MIT License](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache-2.0") {
    return "[The Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GPL-3.0") {
    return "[The GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  }
  return ""
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""
  }
  return `## License
  This application is licensed under ${renderLicenseLink(license)}.`


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}







`;
}

module.exports = {generateMarkdown};

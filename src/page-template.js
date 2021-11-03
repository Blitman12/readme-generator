module.exports = templateData => {
    const { title, description, installation, usage, link, contributions, test, license, github, email} = templateData

    return `
# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Questions](#questions)
* [Tests](#tests)

## Installation
${installation}

## Usage
${usage}
[Production Link](${link})

## Contributions
${contributions}

## License
${license}

## Questions
Please visit my [GitHub profile](https://github.com/${github}) for other cool projects
If you have any remaining questions please feel free to reach me at ${email}

## Tests
${test}
`
}
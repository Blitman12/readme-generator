const badges = {
    'JavaScript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'HTML': 'https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white',
    'CSS': 'https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white',
    'ES6': 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'jQuery': 'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white',
    'Node': 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
    'React': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
}

const licensesObj = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GPLv2': 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'Apache': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg'
}


const generateLanguageBadge = languages => {
    if (languages.length === 0) {
        return
    }

    return languages.map((lang) => {
        return `![${lang}](${badges[lang]})`
    }).join(" ")
}

const generateLicenseBadge = licenses => {
    if (licenses.length === 0) {
        return
    }

    return licenses.map((singleLicense) => {
        return `![${singleLicense}](${licensesObj[singleLicense]})`
    }).join(" ")
}


module.exports = templateData => {
    const { title, description, installation, usage, link, contributions, test, github, email, languages, licenses } = templateData

    return `
${generateLicenseBadge(licenses)}
# ${title}
${generateLanguageBadge(languages)}

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
This project is covered under the License/License's: ${licenses.join(", ")}.

## Questions
Please visit my [GitHub profile](https://github.com/${github}) for other cool projects
If you have any remaining questions please feel free to reach me at ${email}

## Tests
${test}
`
}
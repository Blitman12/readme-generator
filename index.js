// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generatePage = require('./src/page-template')
const writeFile = require('./utils/generateMD')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your ReadMe Title?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter your Title!');
            return false;
        }
    },
},
{
    type: 'input',
    name: 'description',
    message: 'What is your project description?',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter your description!');
            return false;
        }
    },
},
{
    type: 'input',
    name: 'installation',
    message: 'What are you installation instructions?',
    validate: installationInput => {
        if (installationInput) {
            return true
        } else {
            console.log("Please enter your instructions");
            return false
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'What are you usage instructions?',
    validate: usageInput => {
        if (usageInput) {
            return true
        } else {
            console.log("Please enter your usage instructions");
            return false
        }
    }
},
{
    type: 'input',
    name: 'link',
    message: 'What is the link to your deployed application?',
    validate: linkInput => {
        if (linkInput) {
            return true
        } else {
            console.log("Please enter your project link");
            return false
        }
    }
},
{
    type: 'input',
    name: 'contributions',
    message: 'What are your contribution instructions?',
    validate: contributionInput => {
        if (contributionInput) {
            return true
        } else {
            console.log("Please enter your usage contributions");
            return false
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
    validate: githubInput => {
        if (githubInput) {
            return true
        } else {
            console.log("Please enter your github username");
            return false
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email Address?',
    validate: emailInput => {
        if (emailInput) {
            return true
        } else {
            console.log("Please enter your email address");
            return false
        }
    }
},
{
    type: 'checkbox',
    name: 'languages',
    message: 'What did you build this project with? (Check all that apply)?',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Node', 'React'],
    validate: languageInput => {
        if (languageInput) {
            return true
        } else {
            console.log("What did you build this project with? (Check all that apply)");
            return false
        }
    }
},
{
    type: 'checkbox',
    name: 'licenses',
    message: 'What did you build this project with? (Check all that apply)?',
    choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
    validate: licenseInput => {
        if (licenseInput) {
            return true
        } else {
            console.log("What license`s would you like? (Check all that apply)");
            return false
        }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'What are you test instructions?',
    validate: testInput => {
        if (testInput) {
            return true
        } else {
            console.log("Please enter your test instructions");
            return false
        }
    }
}];

// Data collection for questions 
const promtQuestions = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


promtQuestions()
.then(questionData => {
    console.log(questionData)
    return generatePage(questionData)
})
.then(pageMD => {
    writeFile(pageMD)
})
/*
At least one badge
Project title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
  * User GitHub profile picture
  * User GitHub email
*/

const avatar = {Response.avatar_url};
const inquirer = require("inquirer");
const fs = require("fs");
var axios = require('axios');


inquirer.prompt([
    {
        message: "What is your name?",
        type: "input",
        name: "firstName"

    },
    {
        message: "Where are you from?",
        type: "input",
        name: "location"

    },
    {
        message: "What is your bio?",
        type: "input",
        name: "bio"

    },
    {
        message: "What is your github username?",
        type: "input",
        name: "github"

    },
    {
        message: "What is your linkedin username?",
        type: "input",
        name: "linkedin"

    }
]).then(function(answers) {
    // console.log(answers);
    
    const queryUrl = `https://api.github.com/users/${username};`

    axios.get('queryURL').then(function(data){


    const markdownGenerator = `
 
# Introduction

<img src="avatar">

Hi my name is ${answers.firstName} and I am from ${answers.location}. ${answers.bio}

## Info

* My GitHub URL is http://github.com/${answers.github}

* My LinkedIn is http://linkedin.com/in/${answers.linkedin}

* **Important**:

* More info at my website

`;

    // console.log(htmlGenerator);

    const filename = "readme-test.md";

    fs.writeFile(filename, markdownGenerator, function(err) {
        if(err) {
            throw err;
        }

        console.log(`Success! ${filename} was created!`);
    })
});
});
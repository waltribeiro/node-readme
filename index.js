
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
    // {
    //   message: "What is your choice?",
    //   type: "choices",
    //   name: "chances",
    //   choices: ["Choice A", "choice B", "choice C"],

    // },
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
])  .then(async function(answers) {


  const queryURL = `https://api.github.com/users/${answers.github}`

  await axios.get(queryURL).then(function(data) {
  

  const markdownGenerator = `

# [Introduction](#introduction) &nbsp; • &nbsp; [Description](#description) &nbsp; • &nbsp; [Usage](#usage) &nbsp; • &nbsp; [Info](#info) &nbsp; • &nbsp; [Badges](#badges) &nbsp; • &nbsp; [License](#license)

<img src="${data.data.avatar_url}" style="width=250px;">

<a name="introduction"></a>
# Introduction
Hi my name is ${answers.firstName} and I am from ${answers.location}. ${answers.bio}.

<a name="description"></a>
## Description

This README was completely self-generated using Node.js

Watch this video to see how it was made:
http://node.waltribeiro.com

<a name="usage"></a>
## Usage

This shows my ability to build a command-line app for your service or business. Things like editing employee info or tracking inventory are 2 examples how this may be useful for your company. 

<a name="info"></a>
## Info

* My GitHub URL is http://github.com/${answers.github}

* My LinkedIn is http://linkedin.com/in/${answers.linkedin}

<a name="badges"></a>
## Badges
<img src="https://img.shields.io/badge/github-${answers.github}-orange">

<a name="license"></a>
## License

This repository is licensed MIT
https://github.com/waltribeiro/node-readme/blob/master/LICENSE.md

`;

  // console.log(htmlGenerator);

  const filename = "README.md";

  fs.writeFile(filename, markdownGenerator, function(err) {
      if(err) {
          throw err;
      }

      console.log(`Success! ${filename} was created!`);
  })
});



})
.catch(function(err) {
  console.log(err);
});


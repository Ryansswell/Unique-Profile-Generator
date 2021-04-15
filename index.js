const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


class Team {
  addManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Provide your name:',
        },
    
        {
          type: 'number',
          name: 'ID',
          message: 'What is your employee Id?',
        },
        {
          type: 'input',
          name: 'Email',
          message: 'What is your email?',
        },
        {
          type: 'officenumber',
          name: 'officenumber',
          message: 'What is your office number?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is your school?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your github?',
        },
      ])
    
        .then((answers) => {
          console.log(answers.name );
          console.log(answers.id);
          console.log(answers.email);
          console.log(answers.officenumber)
        });
      }
  }

  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <title>Unique Profile Generator</title>
  </head>
  <body>
      <h1>Dream Team!</h1>
  
  
  
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Unique Profile</h5>
            <p class="card-text">#</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">name</li>
            <li class="list-group-item">id</li>
            <li class="list-group-item">email</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">link</a>
          </div>
        </div>
  
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
  </html>`
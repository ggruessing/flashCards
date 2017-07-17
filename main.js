var basic = require("./basic.js")
var cloze = require ("./cloze.js")
var fs = require("fs")
var inquirer = require("inquirer")

inquirer.prompt([
		{
			type: "confirm",
			message: "Would you like to play a game?",
			name: "run"
		},
		{
			type: "list",
			message: "Which would you prefer?",
			choices: ["basic","cloze","exit"],
			name: "choice"
		}
	]).then(function(start){
		switch(start.choice) {
			case "basic":
			basic()
			break;

			case "cloze":
			cloze()
			break;

			case"exit":
			console.log("bye felicia")
			break;
	}
})
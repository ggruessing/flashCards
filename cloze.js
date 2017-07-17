var clozeQ = require("./cloze.json")

var inquirer = require("inquirer")

var qCount = 0

var right = 0

var cloze = function(){
	if(qCount===clozeQ.length){
			console.log("")
			console.log("")
			console.log("GAME OVERRRRR")
			console.log("")
			console.log("Final Score: "+right+" correct.")
			console.log("")
			console.log("")
		}
	else{
	inquirer.prompt([
		{
			type: "input",
			message: (clozeQ[qCount].full).replace(clozeQ[qCount].cloze,"...."),
			name: "answer"
		},
	]).then(function(then){

		if (then.answer.toLowerCase()===clozeQ[qCount].cloze){
			console.log("")
			console.log("Correct!")
			console.log("")
			console.log("Next Question: ")
			console.log("")
			qCount++
			right++
			cloze()
		}
		
		else{
			console.log("")
			console.log("WRONG?!")
			console.log("")
			console.log("The answer was: "+clozeQ[qCount].cloze)
			console.log("")
			console.log("Next Question: ")
			console.log("")
			qCount++
			cloze()
		}
	})
}
}

module.exports = cloze;
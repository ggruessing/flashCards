var basicQ = require("./basic.json")

var inquirer = require("inquirer")

var qCount = 0

var right = 0

var basic = function(){
	if(qCount===basicQ.length){
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
			message: basicQ[qCount].front,
			name: "answer"
		},
	]).then(function(then){

		if (then.answer.toLowerCase()===basicQ[qCount].back){
			console.log("")
			console.log("Correct!")
			console.log("")
			console.log("Next Question: ")
			console.log("")
			qCount++
			right++
			basic()
		}
		
		else{
			console.log("")
			console.log("WRONG?!")
			console.log("")
			console.log("The answer was: "+basicQ[qCount].back)
			console.log("")
			console.log("Next Question: ")
			console.log("")
			qCount++
			basic()
		}
	})
}
}

module.exports = basic;
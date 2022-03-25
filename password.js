const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Hello! What's your name?", function(input){
    let userName = input

    reader.close()
}

reader.question(`Hello ${userName}! Please enter your password`, function(input){
	
    let tokens = input.split(' ');
	let mathSymbol = tokens[0];
	let num1 = Number(tokens[1]);
	let num2 = Number(tokens[2]);
	let answer 





	reader.close()
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
rl.question("Hello, Please enter your password.", function(input){
    let isTenChars
    if (input.length >=10) {
      isTenChars = true
    }

    rl.close()
});
*/

rl.question('Hello beautiful!! Whats your name?:', (name) => {
  rl.question(`Hello ${name}, What's your password:`, (password) => {

      if (password.length >=10) {
      console.log(`Your password is at least 10 characters. Good job, ${name}`)
    } else console.log(`Your password is less than 10 characters. Sorry ${name}`)

      rl.close();
  });
});
/*
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q1 What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}
*/
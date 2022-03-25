const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('Hello beautiful! Whats your name?:', (name) => {
  rl.question(`Hello ${name}, What's your password? (It must contain at least 10 characters and at least one number):`, (password) => {
      
    let passFail

    if (password.length >=10) { // checks length of password is >10
      passFail = true
    }

    //console.log(password.length)

    //the next two blocks of codes check that password contains a number
    let pattern0 = /0/;
    let pattern1 = /1/;
    let pattern2 = /2/;
    let pattern3 = /3/;
    let pattern4 = /4/;
    let pattern5 = /5/;
    let pattern6 = /6/;
    let pattern7 = /7/;
    let pattern8 = /8/;
    let pattern9 = /9/;

    if (pattern0.test(password) === false && 
    pattern1.test(password) === false &&
    pattern2.test(password) === false &&
    pattern3.test(password) === false &&
    pattern4.test(password) === false &&
    pattern5.test(password) === false &&
    pattern6.test(password) === false &&
    pattern7.test(password) === false &&
    pattern8.test(password) === false &&
    pattern9.test(password) === false) {
      passFail = false
    } else { passFail = true
      }
      
    //console.log('The pass Fail Status is:', passFail)
    
    if (passFail === true) {
      console.log(`Your password meets the requirements. Good job, ${name}!`)
    } else console.log(`Your password is less than 10 characters or contains no number. Sorry ${name}.`)

    rl.close();
  });
});

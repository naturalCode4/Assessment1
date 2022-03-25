const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello beautiful! Welcome to the password validator.')

rl.question('Whats your name?:', (name) => {
  rl.question(`Hello ${name}, What's your password? (It must contain at least 10 characters, at least one number, and at least one Capital Letter):`, (password) => {
      
    let lengthPassFail = false // starts false for context of test
    let numberPassFail = true // starts true for context of test
    let capitalPassFail = false // starts false for context of test


    if (password.length >=10) { // checks length of password is >10
      lengthPassFail = true
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
      numberPassFail = false
    }


    //this code block checks that you have at least one capital letter

    for (let i=0; i<password.length; i++) {
      if (password.charCodeAt(i) >=65 && password.charCodeAt(i) <= 90) { // checks to see that character is a letter (e.g. 'a','b','z')
        if (password[i] === password[i].toUpperCase()) {
          capitalPassFail = true
        } 
      }
    }
          
    if (lengthPassFail === true && numberPassFail === true && capitalPassFail === true) {
      console.log(`Your password meets the requirements. Good job, ${name}!`)
    } else console.log(`Your password is less than 10 characters, missing a number, or missing a Capital Letter. Sorry ${name}.`)

    rl.close();
  });
});

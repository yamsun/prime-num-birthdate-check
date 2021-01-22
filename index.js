var readline = require("readline-sync");
var chalk = require("chalk");
var userName = readline.question(chalk.green("Please enter your name : "));

console.log(chalk.cyan("Hi "+userName+"! Let's check if your Birthday is a prime number or a non-prime number"));

var dobInput = readline.question(chalk.cyan("\nEnter your birth date in DD/MM format : "));

dateMonthArray = dobInput.split("/");

//dateMonthArray is [date,month]

date = dateMonthArray[0];
month = dateMonthArray[1];

//output

if(checkValidDateMonth(date,month)){
  if(checkPrime(date)){
    console.log(chalk.bgBlue("\nYour date of birth is a Prime number"));
  }
  else{
    console.log(chalk.bgBlue("\nYour date of birth is a Non-Prime number"));
  }
  }
  else{
    console.log(chalk.bgRed("\nPlease enter a valid Date, Try again!"));
  }

// processings

function checkValidDateMonth(date,month){
  if(month==2&&date>29){
    return false;
  }
  if(month>12 || month <=0){
    return false;
  }

  if(date<=0 || date>31){
    return false;
  }
  
  return true; //in all other cases
  //later, write some more code here to check 30,31 in each months
}


// logic for checking Primality of a num
//primes have exactly 2 factors.period. those come out to be "1" and itself. "1" is a non-prime coz 1 has only 1 factor ie:1 , not exactly two factors.
// to check primality of n, there shouldn't be any facor between 2 to n-1(included). run a for loop.

function checkPrime(n){
  if(n<=1){
    return false;
  }
  // check from 2 to n-1
  for(i=2;i<n;i++){
    if(n%i==0){
      return false;
    }
  }
  return true; //true in all other cases

}

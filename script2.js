// Set String
const abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const abcUpperArr = abcUpper.split("");
const abcLower = "abcdefghijklmnopqrstuvwxyz";
const abcLowerArr = abcLower.split("");
const num = "0123456789";
const numArr = num.split("");
const sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
const symArr = sym.split("");

//Prompt the user with Walcome and Instructions

window.onload = alert("Welcome! Please click 'Generate password' to start!");











//Need password page to prompt user
const plength = Number(prompt("How many characters would you like your password to be?"));

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, Characters) {
    



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
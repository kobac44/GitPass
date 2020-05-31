//Need password page to prompt user
const plength = Number(prompt("How many characters would you like your password to be?"));

const generateBtn = document.querySelector("#generate");

const uppers = confirm("Would you like to use uppercase letters");
const lowers = confirm("Would you like to use lowercase letters?");
const numbers = confirm("Would you like to use numbers?");
const specialCharacters = confirm("Would you like to use special characters"); 

//Element Identifiers 
const uppersCaseLetters = document.getElementById("uppers");
const lowerCaseLetters = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const specialCharacters = document.getElementById("special");
  
// Write password to the #password input
function writePassword(length, Characters) {
    



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
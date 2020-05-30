//Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// need computer to prompt user these questions; 
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCase = confirm("Do you want lowercase in your password?");

  var upperCase = confirm("Do you want uppercase in your password?");
   
  var special = confirm("Do you want special characters in your password?");

  //Is there a minimum count of nums, lowercase, uppercase, or specialCharacters?
  var minimumCount = 0

  //There are no minimums for nums, lowercase, uppercase, or specialCharacters
  var minimumNumbers = "";
  var minimumLowerCase = "";
  var minimumUpperCase = "";
  var minimumSpecialCharacters = "";

   //Generate Function- I grabbed http://www.net-comber.com/charset.
  // this youtube was very helpful https://youtu.be/duNmhKgtcsI
  var functionArray = { 
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  getLowerCase: function() { 
   return String.fromCharCode(Math.floor(Math.random() * 26 + 97));

},
  
  getUpperCase: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));

  },

  getSpecialCharacters: function() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }

};

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


// Assignment Code
//var generateBtn = document.querySelector("#generate");  
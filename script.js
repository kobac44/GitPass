// when my page opens I would like to prompt/ confirm the action for this page
const length = Number(prompt("How many characters would you like your password to be?"));

const generateBtn = document.querySelector("#generate"); 

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()/.,";


// need computer to prompt user these questions; 
function generatePassword() {
let passwordLength = prompt(" How long should the password be? It must be more than 8 but less than 128.");
let numbers = confirm("Do you want numbers in your password?");
let lowerCase = confirm("Do you want lowercase in your password?");
let upperCase = confirm("Do you want uppercase in your password?");
let special = confirm("Do you want special characters in your password?");

  //Is there a minimum count of nums, lowercase, uppercase, or specialCharacters?
  let minimumCount = 1

  //There are no minimums for nums, lowercase, uppercase, or specialCharacters
  let minimumNumbers = "";
  let minimumLowerCase = "";
  let minimumUpperCase = "";
  let minimumSpecialCharacters = "";

   //Generate Function- I grabbed http://www.net-comber.com/charset.
  // this youtube was very helpful https://youtu.be/duNmhKgtcsI
  
    function getRandomNumbers () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48);
  }

  function getandomLowerCase () { 
   return String.fromCharCode(Math.floor(Math.random() * 26 + 97);

}
  
  function getRandomUpperCase () {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65);

  }

  function getSpecialCharacters() {
    const specialCharacters = '!@#$%^&*()/,.';
    return characters[]
  }

}  console.log(getRandomCharacters());

if (numbers === 10) {
  minimumNumbers = 
}

//Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
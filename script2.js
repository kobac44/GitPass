//we define the available character types our password can have
// Set Character String or placeholder
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialCharacters = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~"

//we define the user desired character types
let characterTypes = []

const passwordArr = [];
const password = "";
//we reset the desired character types, in case the user wants to generate multiple passwords
function generatePassword() { }
characterTypes = []
randomlySelecte = "";

//we ask how long they want their password
let passwordLength = prompt("How many characters do you want your password to be? (between 8 - 128)");

//we make sure the password is between 8 and 128 characters
if (passwordLength < 8 || passwordLength > 128) {

  //if it is not between 8 and 128 we alert them of their error
  alert("Please only Enter number(s) between 8 - 128");
}
else {

  //we ask which charcter types they want
  console.log(passwordLength);
  userUpperCase = confirm("Do you want uppercase letters?");
  userLowerCase = confirm("Do you want lowercase letters?");
  userNumbers = confirm("Do you want numbers?");
  userSpecialChar = confirm("Do you want speical characters?");

  for (var i = 0; characterTypes.length < passwordLength; i++) {

    //if they select one of the character types, we push it to the character types array
    if (userUpperCase === true && characterTypes.length < passwordLength) {
      let upperCaseInput = [upperCase.charAt(Math.floor(Math.random() * upperCase.length))];
      characterTypes.push(upperCaseInput);
      console.log(characterTypes)
    }
    else {
      userUpperCase = false;
    }

    if (userLowerCase === true && characterTypes.length < passwordLength) {
      let lowerCaseInput = [lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))];
      characterTypes.push(lowerCaseInput);
      console.log(characterTypes)
    }
    else {
      userLowerCase = false;
    } for (var i = 0; characterTypes.length < passwordLength; i++) {

      //if they select one of the character types, we push it to the character types array
      if (userUpperCase === true && characterTypes.length < passwordLength) {
        let upperCaseInput = [upperCase.charAt(Math.floor(Math.random() * upperCase.length))];
        characterTypes.push(upperCaseInput);
        console.log(characterTypes)
      }
      else {
        userUpperCase = false;
      }

      if (userLowerCase === true && characterTypes.length < passwordLength) {
        let lowerCaseInput = [lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))];
        characterTypes.push(lowerCaseInput);
        console.log(characterTypes)
      }
      else {
        userLowerCase = false;
      }
      if (userNumbers === true && characterTypes.length < passwordLength) {
        let numberInput = [numbers.charAt(Math.floor(Math.random() * numbers.length))];
        characterTypes.push(numberInput);
        console.log(characterTypes)
      }
      else {
        userumber = false;
      }

      if (userSpecialChar === true && characterTypes.length < passwordLength) {
        let specialCharInput = [specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))];
        characterTypes.push(specialCharInput);
        console.log(characterTypes)
      }
      else {
        userSpecialCharConfirm = false;
      }

    }
  }  
}
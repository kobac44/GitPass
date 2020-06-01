//we define the available character types our password can have
// Set Character String or placeholder
const abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const abcLower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789"
const sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

//define character types
const characterTypes = [];
//we ask the user how long they want their password
const passwordLength;
//we initialize, but dont define, our user input (true or false)
const userUpperCase;
const userLowerCase;
const userNumbers;
const userSpecialChar;
const randomlySelectedArray;
const randomlySelectedCharacter;
//we initialize a variable that will hold our randomly generated password
const passwordArr = [];
const password = "";

//we create a function that gather information from the user
function userPrompt() {
    password = '';
    document.getElementById("messageInput").value = "";



    //we reset the desired character types, in case the user wants to generate multiple passwords
    characterTypes = [];
    randomlySelectedArray = "";
    randomlySelectedCharacter = "";
    //we ask how long they want their password
    passwordLength = prompt("How many characters do you want your password to be? (between 8-128)")
    //we make sure the password is between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        //if it is not between 8 and 128 we alert them of their error
        alert("Enter number between 8-128")
        //we also start the user info gathering over again
        userPrompt();
    } else {
        //we ask which charcter types they want
        // console.log(passwordLength);
        userUpperCase = confirm("Do you want uppercase letters?");
        userLowerCase = confirm("Do you want lowercase letters?");
        userNumbers = confirm("Do you want numbers?");
        userSpecialChar = confirm("Do you want speical characters?");
        //if they select one of the character types, we push it to the character types array
        if (userUpperCase === true) {
            characterTypes.push(upperCase);
        }
        if (userLowerCase === true) {
            characterTypes.push(lowerCase);
        }
        if (userNumbers === true) {
            characterTypes.push(numbers);
        }
        if (userSpecialChar === true) {
            characterTypes.push(specialCharacters);
        }
        //ensure that the user has selected at least one character type
        if (characterTypes.length < 2) {
            alert("Select more than 1 character type for security")
            userPrompt()
        } else {
            // console.log(characterTypes);
            for (let i = 0; i < passwordLength; i++) {
                randomArray(characterTypes);
                passwordArr.push(randomChar(randomlySelectedArray));
                password += randomChar(randomlySelectedArray);
            }
            password = passwordArr.join("");
            // password = passwordArr.join("");
            // alert(password);
            document.getElementById("messageInput").value = password;

            // function myFunction() {
            //     document.getElementById("messageInput").reset();
        }
    }
}
//Randomize password
function randomArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomlySelectedArray = array[randomIndex];
}
function randomChar(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomlySelectedCharacter = arr[randomIndex]
    console.log("random character: " + randomlySelectedCharacter);
    return randomlySelectedCharacter
}




   //Generate Function- I grabbed http://www.net-comber.com/charset.
  // this youtube was very helpful https://youtu.be/duNmhKgtcsI
  
function getandomLowerCase() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}


function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor (Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
} 
console.log(getRandomSymbol()); 

//  function getRandomNumbers () {
    //return String.fromCharCode(Math.floor(Math.random() * 10 + 48);
  









// Assignment Code
// varialble declaration
var generateBtn = document.querySelector("#generate");
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var symbolChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

var passwordLength;
var checkUpperCase;
var checkNumber;
var checkSymbol;

//Function to get password length and validate
function getLength(){
    passwordLength = prompt("Choose how long you would like your password to be (between 8-128 characters): ");
  
    if (passwordLength<8 || passwordLength>128 ){
        alert('The password must be between 8 and 128 characters');
        return
    
      } if (isNaN(passwordLength)){
        alert("Please insert numbers only");
        getLength();
      }
      return passwordLength;
  }
//Function to get password criteria for letters
function getUppercase(){
    checkUpperCase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
      checkUpperCase = checkUpperCase.toLowerCase();
  
      if (checkUpperCase === null || checkUpperCase === ""){
        alert("Please answer Yes or No");
        getUppercase();
  
      }else if (checkUpperCase === "yes" || checkUpperCase ==="y"){
        checkUpperCase = true;
        return checkUpperCase;
  
      }else if (checkUpperCase === "no" || checkUpperCase ==="n"){
        checkUpperCase = false;
        return checkUpperCase;
      
      }else {
        alert("Please answer Yes or No");
        geteUppercase();
      }
      return checkUpperCase;
}
//Function to get password criteria for numbers
function getNumbers(){
    checkNumber = prompt("Do you want to include numbers in your password? \n(Yes or No)");
      checkNumber = checkNumber.toLowerCase();
  
      if (checkNumber === null || checkNumber === ""){
        alert("Please answer Yes or No");
        getNumbers();
  
      }else if (checkNumber === "yes" || checkNumber ==="y"){
        checkNumber = true;
        return checkNumber;
  
      }else if (checkNumber === "no" || checkNumber ==="n"){
        checkNumber = false;
        return checkNumber;
      
      }else {
        alert("Please answer Yes or No");
       getNumbers();
      }
      return checkNumber;
}
//Function to get criteria for symbols
function getSymbol(){
    checkSymbol = prompt("Do you want to include special characters in your password? \n(Yes or No)");
      checkSymbol = checkSymbol.toLowerCase();
  
      if (checkSymbol === null || checkSymbol === ""){
        alert("Please answer Yes or No");
        getSymbol();
  
      }else if (checkSymbol === "yes" || checkSymbol ==="y"){
        checkSymbol = true;
        return checkSymbol;
  
      }else if (checkSymbol === "no" || checkSymbol ==="n"){
        checkSymbol = false;
        return checkSymbol;
      
      }else {
        alert("Please answer Yes or No");
        getSymbol();
      }
      return checkSymbol;
  }

  function getValidation(){
      if(checkUpperCase===false && checkNumber===false && checkSymbol===false)
      alert("You must select at least one character type")
      getUppercase();
  }
//Function to get the input values

 function generatePassword(){
    getLength();
    console.log(passwordLength);
    getUppercase();
    console.log(checkUpperCase);
    getNumbers();
    console.log(checkNumber);
    getSymbol();
    console.log(checkSymbol);
    getValidation();

  
  var characters = lowercaseletters;
  var password = "";
  if (checkUpperCase && checkNumber && checkSymbol){
    characters += uppercaseletter + numberChar + symbolChar;
  
  }else if (checkUpperCase && checkNumber){
    characters += uppercaseletter + numberChar;
  
  }else if (checkNumber && checkSymbol){
    characters += numberChar + symbolChar;
  
  }else if (checkUpperCase && checkSymbol){
    characters += uppercaseletter + symbolChar;
  
  }else if (checkUpperCase){
    characters += uppercaseletter;
  
  }else if(checkNumber){
    characters += numberChar;
  
  }else if (checkSymbol){
    characters += symbolChar;
  
  }else{
    characters === lowercaseChar;
  }
  //function to generate a random password
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

  // Write password to the input
function writePassword() {
    var RandomPassword = "";
    RandomPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = RandomPassword;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)

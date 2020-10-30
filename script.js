// Assignment Code
/*let lowercaseletters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
let uppercaseletter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
let numberArr=['0','1','2','3','4','5','6','7','8','9']
let symbolArr=["'~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}',';',':',',','.','<','>','/','?','/','"]
*/
var generateBtn = document.querySelector("#generate");
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var symbolChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

var passwordLength;
var checkUpperCase;
var checkNumber;
var checkSymbol;

//Function used to determine the length of the password
function getLength(){
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  
    if (length<8 || length>128 ){
        alert('The password must be between 8 and 128 characters');
        return
    
      }else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        getLength();
      }
      return passwordLength;
  }
//Function used to determine whether the user wants to include uppercase characters in the password
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
//Function used to determine whether the user wants to include numbers in the password
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
//Function used to determine whether the user wants to include special characters in the password
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
//Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 
 function generatePassword(){
    getLength();
    console.log(passwordLength);
    getUppercase();
    console.log(checkUpperCase);
    getNumbers();
    console.log(checkNumber);
    getSymbol();
    console.log(checkSymbol);
  
  var characters = lowercaseChar;
  var password = "";
  if (checkUpperCase && checkNumber && checkSymbol){
    characters += uppercaseChar + numberChar + specialChar;
  
  }else if (checkUpperCase && checkNumber){
    characters += uppercaseChar + numberChar;
  
  }else if (checkNumber && checkSymbol){
    characters += numberChar + specialChar;
  
  }else if (checkUpperCase && checkSymbol){
    characters += uppercaseChar + specialChar;
  
  }else if (checkUpperCase){
    characters += uppercaseChar;
  
  }else if(checkNumber){
    characters += numberChar;
  
  }else if (checkSymbol){
    characters += specialChar;
  
  }else{
    characters === lowercaseChar;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
//Landi //
/*


function inputoptions(){

  let length=parseInt(prompt('Your password must be between 8 and 128 characters'))
  if(isNaN(length)===true ){
   alert("You must insert a number");
   return
  }
  if (length<8 || length>128 ){
      alert('The password must be between 8 and 128 characters');
      return
  }

  let checkLowerCase=confirm("Click ok if you want to use lower case letters")
  let checkUpperCase=confirm("Click ok if you want to use upper case letters")
  let checkNumber=confirm("Click ok if you want to use numbers")
  let checkSymbol=confirm("Click ok if you want to use a symbol")

  if (checkLowerCase===false && checkUpperCase===false && checkNumber===false && checkSymbol===false){
      alert("You must use at least one character type")
      return
  }
  var password={
      length:length,
      checkLowerCase:true,
      checkNumber: true,
      checkSymbol: true

  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

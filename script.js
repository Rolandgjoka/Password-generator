// Assignment Code
let lowercaseletters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
let uppercaseletter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
let numberArr=['0','1','2','3','4','5','6','7','8','9']
let symbolArr=["'~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}',';',':',',','.','<','>','/','?','/','"]

var generateBtn = document.querySelector("#generate");

function inputoptions(){

  let length=parseInt(prompt('Your password must be between 8 and 128 characters'))
  if(isNaN(length)===true ){
   alert("You must insert a number");
   return
  }
  if (length<8 || length>128 ){
      alert('The password must be between 8 and 128');
      return
  }

  let checkLowerCase=confirm("Click ok if you want to use lower case letters")
  let checkUpperCase=confirm("Click ok if you want to use upper case letters")
  let checkNumber=confirm("Click ok if you want to use  letters")
  let

  if (checkLowerCase===false && checkUpperCase===false && checkNumber===false && ...){
      alert("You must use at least one character type")
      return
  }
  var password={
      length:length,
      checkLowerCase:
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

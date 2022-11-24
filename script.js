// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = 10;
var passwordOptions = [];
var newPassword;
var passwordText;

// Function to prompt user for password options
function getPasswordOptions() {

  passwordOptions = [];
  passwordLength = parseInt(prompt("How long do you want your password to be? (10-64 characters)"));

  if(isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert("Password must be a number 10-64 characters long");
    return false;
  }

  if (confirm("Do you want special characters? (eg. $ % ^ & *)")) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  };

  if (confirm("Do you want numbers?")) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  };

  if (confirm("Do you want upper case characters?")) {
    passwordOptions = passwordOptions.concat(upperCasedCharacters);
  };

  if (confirm("Do you want lower case characters?")) {
    passwordOptions = passwordOptions.concat(lowerCasedCharacters);
  } else {
    alert("You need at least one character type");
    return
  }
  return true;
}

// Function for getting a random element from an array
function getRandom() {
  var password = "";
  for (i = 0; i < passwordLength; i ++) {
    var randomCharacter = Math.floor(Math.random() * passwordOptions.length);
    password = password + passwordOptions[randomCharacter];
  
  }
  return password;
}

// Function to generate password with user input
function generatePassword() {
  getRandom();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {

  var validOptions = getPasswordOptions();

  if (validOptions){

    var newPassword = getRandom();
    var passwordText = document.querySelector('#password');
    passwordText.value = newPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
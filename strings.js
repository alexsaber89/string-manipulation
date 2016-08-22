//Globals
var userInput = document.getElementById("user_input");
var button = document.getElementById("convert_button");
var output = document.getElementById("output");

//Event Listeners
button.addEventListener("click",inputValidation);
userInput.addEventListener("keyup",checkEnter);

function checkEnter(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    inputValidation();
  }
};

function inputValidation() {
	var testString = userInput.value;
	if (isNaN(testString)) {
		reversal(testString);
		alphabits(testString);
	} else {
		alert("Please limit your entries to letters only.")
	}
}

//String manipulation functions
function reversal(testString) {
	var reversedString = testString.split("").reverse().join("");
	output.innerHTML += "Reversed: " + reversedString + "<br />";
	palindrome(testString,reversedString);
}

function alphabits(testString) {
	var alphabetizedString = testString.split("").sort().join("");
	output.innerHTML += "Sorted: " + alphabetizedString + "<br />";
}

function palindrome(testString,reversedString) {
	if (testString === reversedString) {
		output.innerHTML += "Your string is a palindrome!" + "<br />";
	}
}
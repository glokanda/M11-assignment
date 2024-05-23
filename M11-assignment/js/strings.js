// STEP 1
function nameLength() {
  let name = prompt("Enter your name:");
  alert("The length of your name is: " + name.length);
}

// STEP 2
function charAtPosition() {
  let name = prompt("Enter your name:");
  let position = parseInt(
    prompt("Enter a number to find the character at that position:")
  );
  alert(
    "The character at position " + position + " is: " + name.charAt(position)
  );
}

// STEP 3
function concatenateNames() {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  alert("Your name is: " + firstName + " " + lastName);
}

// STEP 4
function findFoxIndex() {
  let text = "The quick brown fox jumps over the lazy dog";
  alert("The index of the word 'fox' is: " + text.indexOf("fox"));
}

// STEP 5
function findLastFoxIndex() {
  let text = "The quick brown fox jumps over the lazy fox";
  alert("The last index of the word 'fox' is: " + text.lastIndexOf("fox"));
}

// STEP 6
function replaceLazyDog() {
  let text = "The quick brown fox jumped over the lazy dog";
  let name = prompt("Enter your full name:");
  let newText = text.replace("the lazy dog", name);
  alert(newText);
}

// STEP 7
function searchWord() {
  let text = "The quick brown fox jumps over the lazy dog";
  let word = prompt("Enter a word to search for:");
  let index = text.indexOf(word);
  alert("The word '" + word + "' is found at index: " + index);
}

// STEP 8
function extractAndUppercase() {
  let old_string = "The quick brown fox jumps over the lazy dog";
  let new_string = old_string.substring(old_string.indexOf("the lazy dog"));
  alert(new_string.toUpperCase());
}

// STEP 9
function trimAndLowercase() {
  let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
  let trimmedText = text.trim().toLowerCase();
  alert(trimmedText);
}

// STEP 10
function capitalizeFirstLetter() {
  let text = "the quick brown fox jumps over the lazy dog";
  let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  alert(capitalizedText);
}

nameLength();
charAtPosition();
concatenateNames();
findFoxIndex();
findLastFoxIndex();
replaceLazyDog();
searchWord();
extractAndUppercase();
trimAndLowercase();
capitalizeFirstLetter();

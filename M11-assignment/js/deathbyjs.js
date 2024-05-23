//STEP 1
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster"));

//STEP 2
function capitalizeFirstLetterEachWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetterEachWord("the quick brown fox"));

//STEP 3
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("The quick brown fox"));

//STEP 4
function generateRandomId(length) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log(generateRandomId(8));

//STEP 5
function longestCountryName(countries) {
  return countries.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
);

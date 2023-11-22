function firstNonRepeatedChar(str) {
  // Create a map to store the frequency of each character
  let charCount = new Map();

  // Count the frequency of each character in the string
  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first non-repeated character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Prompt the user to enter a string
const input = prompt("Enter a string");

// Call the function and display the result using an alert
alert(firstNonRepeatedChar(input));

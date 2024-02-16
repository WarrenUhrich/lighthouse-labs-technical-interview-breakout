// Given a string, find out which vowels are used in it.
// We don't need count the number of times each vowel was used...
// Just WHICH unique vowels were used.

// 1. INPUT: data-type: String
  // * Is Y a vowel? -> Yes
  // * Is it going to be a sentence with more than 2 words?
  //   -> It could a string of any length. Assume you always receive a string.
// 2. OUTPUT: data-type: Array<String>
  // * Is there a preferred data-type? array, object? -> Array<String>
  // * Should this be return or print? -> return
      // * (No console.log)
      // * Means we MUST write a function.
// 3. PROCESSING
  // 1. Define the vowels (store in an array?)
  // 1.5. Define a results array (starts empty)
  // 2. Loop through the string (see input)
  // 3. Check if character is one of our vowels
  // 4. If it is a vowel:
    // * Push the letter to the `results` array
    // * Remove the letter from the `vowels` array
  // 5. If vowels are empty, break the loop!
  // 6. Return the `results` array after its done looping


/**
 * Vowel Checker
 *
 * @param {string} text - Text to check for vowel use.
 * @returns {Array<string>} - A list of vowels used in input text.
 */
function vowelChecker(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const results = []; // could have been: new Set();
  
  // Loop through the string.
  for(const char of text) {                     // for(const i; i < text.length; i++) { const char = text[i];
    const lowerCaseChar = char.toLowerCase();
    // Check if this character is a vowel.
    if(vowels.includes(lowerCaseChar)) {
      results.push(lowerCaseChar); // Push match to results array.
      // Can't remember: is .splice() destructive?
      // I would double-check on MDN.
      vowels.splice(vowels.indexOf(lowerCaseChar), 1);
    }
    // End loop of there are no more vowels.
    if(vowels.length === 0) break;
  }
  
  return results;
}
 
let sampleText = 'Hello, World!';
let result = vowelChecker(sampleText);
console.log(result); // ['e', 'o']

sampleText = 'Earth day is once a year!';
result = vowelChecker(sampleText);
console.log(result); // ['e', 'a', 'i', 'o', 'y']

 
 

 
/**
 * ==========================================
 * JavaScript String Manipulation Functions
 * ==========================================
 * This module demonstrates core string manipulation concepts in JavaScript:
 * - Working with string indices and immutability
 * - String splitting, array transformations, and joining
 * - Modern ES6+ methods and classic loop approaches
 */

/**
 * 1. Reverse a String
 * -------------------
 * Concept:
 * Strings in JavaScript are immutable, meaning you cannot alter characters in-place.
 * To reverse a string, a common approach is:
 * 1. Split the string into an array of characters (`.split('')`).
 * 2. Reverse the array using the Array method (`.reverse()`).
 * 3. Join the elements back into a single string (`.join('')`).
 *
 * @param {string} str - The input string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Alternative approach: Using a decrementing loop
 * Good for understanding how string indexing and concatenation work under the hood.
 */
function reverseStringLoop(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/**
 * 2. Count Characters
 * -------------------
 * Concept:
 * JavaScript strings have a built-in `.length` property that returns the number
 * of UTF-16 code units in the string.
 *
 * @param {string} str - The input string
 * @param {boolean} [ignoreSpaces=false] - Optional flag to ignore whitespace
 * @returns {number} The total number of characters
 */
function countCharacters(str, ignoreSpaces = false) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (ignoreSpaces) {
    // Remove all whitespace characters using regex
    return str.replace(/\s+/g, '').length;
  }
  return str.length;
}

/**
 * 3. Capitalize Words
 * -------------------
 * Concept:
 * Capitalizes the first letter of each word in a sentence while keeping
 * the remaining letters in lower case.
 * - `.split(' ')` breaks the sentence into an array of words.
 * - `.map()` transforms each word:
 *     - `word.charAt(0).toUpperCase()` capitalizes the first character.
 *     - `word.slice(1).toLowerCase()` ensures the rest is lowercase.
 * - `.join(' ')` stitches the words back together into a single string.
 *
 * @param {string} sentence - The sentence to capitalize
 * @returns {string} The capitalized sentence
 */
function capitalizeWords(sentence) {
  if (typeof sentence !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (sentence.trim() === '') {
    return '';
  }

  return sentence
    .split(' ')
    .map(word => {
      if (word.length === 0) return '';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// Module exports for importing into other files
module.exports = {
  reverseString,
  reverseStringLoop,
  countCharacters,
  capitalizeWords,
};

// If run directly with `node stringManipulation.js`, execute test demonstrations
if (require.main === module) {
  console.log('--- String Manipulation Demos ---');

  // Test 1: Reverse String
  const original = 'Hello World!';
  console.log('Original String:      ', original);
  console.log('Reversed (split/join):', reverseString(original));
  console.log('Reversed (loop):      ', reverseStringLoop(original));

  // Test 2: Count Characters
  const sampleText = 'JavaScript is fun';
  console.log('\nText:                 ', sampleText);
  console.log('Total Characters:     ', countCharacters(sampleText));
  console.log('Without Spaces:       ', countCharacters(sampleText, true));

  // Test 3: Capitalize Words
  const mixedSentence = 'the quick brown FOX jumps over the LAZY dog';
  console.log('\nOriginal Sentence:    ', mixedSentence);
  console.log('Capitalized Words:    ', capitalizeWords(mixedSentence));
}


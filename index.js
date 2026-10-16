/**
 * ========================================================
 * Main Demonstration Runner for JavaScript Concepts
 * ========================================================
 * Run this file using:
 *    node index.js
 */

const {
  reverseString,
  countCharacters,
  capitalizeWords,
} = require('./stringManipulation');

const {
  findMax,
  findMin,
  sumArray,
  filterArray,
} = require('./arrayFunctions');

const {
  factorial,
  isPrime,
  fibonacciSequence,
} = require('./mathFunctions');

function header(title) {
  console.log('\n' + '='.repeat(60));
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

// ----------------------------------------------------
// 1. String Manipulation Functions
// ----------------------------------------------------
header('1. STRING MANIPULATION FUNCTIONS');

// Reverse a String
const phrase = 'Antigravity JavaScript';
console.log('• Reverse a String:');
console.log(`  Input:  "${phrase}"`);
console.log(`  Output: "${reverseString(phrase)}"`);

// Count Characters
const bio = 'Learning JavaScript in 2026!';
console.log('\n• Count Characters:');
console.log(`  Input:        "${bio}"`);
console.log(`  Total chars:  ${countCharacters(bio)}`);
console.log(`  Without gaps: ${countCharacters(bio, true)}`);

// Capitalize Words
const quote = 'practice makes permanent and progress brings mastery';
console.log('\n• Capitalize Words:');
console.log(`  Input:  "${quote}"`);
console.log(`  Output: "${capitalizeWords(quote)}"`);

// ----------------------------------------------------
// 2. Array Functions
// ----------------------------------------------------
header('2. ARRAY FUNCTIONS');

const scores = [45, 12, 89, 23, 7, 98, 64, 33];
console.log(`Input Array: [${scores.join(', ')}]`);

// Find Maximum and Minimum
console.log('\n• Maximum & Minimum:');
console.log(`  Maximum value: ${findMax(scores)}`);
console.log(`  Minimum value: ${findMin(scores)}`);

// Sum of Array
console.log('\n• Sum of Array:');
console.log(`  Total sum: ${sumArray(scores)}`);

// Filter Array
console.log('\n• Filter Array:');
const passingScores = filterArray(scores, score => score >= 50);
console.log(`  Condition (score >= 50):  [${passingScores.join(', ')}]`);

const evenScores = filterArray(scores, score => score % 2 === 0);
console.log(`  Condition (even numbers): [${evenScores.join(', ')}]`);

// ----------------------------------------------------
// 3. Mathematical Functions
// ----------------------------------------------------
header('3. MATHEMATICAL FUNCTIONS');

// Factorial
const factNum = 6;
console.log('• Factorial:');
console.log(`  ${factNum}! = ${factorial(factNum)} (6 * 5 * 4 * 3 * 2 * 1)`);
console.log(`  0! = ${factorial(0)} (by definition)`);

// Prime Number Check
console.log('\n• Prime Number Check:');
const testPrimes = [1, 2, 7, 9, 13, 25, 29, 31, 49];
testPrimes.forEach(num => {
  console.log(`  Is ${num.toString().padStart(2)} prime? -> ${isPrime(num) ? 'YES (Prime)' : 'NO'}`);
});

// Fibonacci Sequence
const fibTerms = 10;
console.log(`\n• Fibonacci Sequence (first ${fibTerms} terms):`);
console.log(`  ${JSON.stringify(fibonacciSequence(fibTerms))}`);

console.log('\n' + '='.repeat(60));
console.log('  All demonstrations executed successfully!');
console.log('='.repeat(60) + '\n');


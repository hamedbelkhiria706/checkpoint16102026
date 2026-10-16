/**
 * ==========================================
 * JavaScript Mathematical Functions
 * ==========================================
 * This module demonstrates fundamental math algorithms in JavaScript:
 * - Recursion vs. iteration (Factorial)
 * - Primality test optimization (Square root boundary)
 * - Sequence generation and state tracking (Fibonacci Sequence)
 */

/**
 * 1. Factorial of a Number
 * ------------------------
 * Concept:
 * The factorial of a non-negative integer n, denoted as n!, is the product
 * of all positive integers less than or equal to n:
 *   n! = n * (n - 1) * (n - 2) * ... * 1
 * Special case: 0! = 1.
 * Factorials are not defined for negative numbers.
 *
 * @param {number} n - Non-negative integer
 * @returns {number} Factorial of n
 */
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new RangeError('Input must be a non-negative integer');
  }

  // Base cases
  if (n === 0 || n === 1) {
    return 1;
  }

  // Iterative approach to avoid stack overflow with large numbers
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Alternative approach: Recursive Factorial
 * Concept:
 * Recursion solves a problem by having a function call itself with smaller inputs
 * until reaching a base case.
 */
function factorialRecursive(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new RangeError('Input must be a non-negative integer');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

/**
 * 2. Prime Number Check
 * ---------------------
 * Concept:
 * A prime number is a natural number greater than 1 that cannot be formed by
 * multiplying two smaller natural numbers (only divisible by 1 and itself).
 *
 * Optimization:
 * - Numbers <= 1 are not prime.
 * - 2 and 3 are prime.
 * - Even numbers > 2 and multiples of 3 can be checked immediately.
 * - Any factor of a number must be <= Math.sqrt(num). Testing up to the square
 *   root reduces the time complexity from O(n) to O(sqrt(n)).
 *
 * @param {number} num - The number to test
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return false;
  }

  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false;

  // 2 and 3 are prime
  if (num === 2 || num === 3) return true;

  // Multiples of 2 or 3 are not prime
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check possible factors up to sqrt(num) using 6k ± 1 pattern
  const limit = Math.sqrt(num);
  for (let i = 5; i <= limit; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

/**
 * 3. Fibonacci Sequence
 * ---------------------
 * Concept:
 * The Fibonacci sequence is a series of numbers where each number (Fibonacci number)
 * is the sum of the two preceding ones:
 *   F(0) = 0
 *   F(1) = 1
 *   F(n) = F(n - 1) + F(n - 2) for n >= 2
 *
 * Sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
 *
 * @param {number} numTerms - Number of terms to generate in the sequence
 * @returns {number[]} Array containing the sequence up to numTerms
 */
function fibonacciSequence(numTerms) {
  if (typeof numTerms !== 'number' || !Number.isInteger(numTerms) || numTerms < 0) {
    throw new RangeError('Number of terms must be a non-negative integer');
  }

  if (numTerms === 0) return [];
  if (numTerms === 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}

// Module exports for importing into other files
module.exports = {
  factorial,
  factorialRecursive,
  isPrime,
  fibonacciSequence,
};

// If run directly with `node mathFunctions.js`, execute test demonstrations
if (require.main === module) {
  console.log('--- Mathematical Functions Demos ---');

  // Test 1: Factorial
  const n = 5;
  console.log(`Factorial of ${n} (iterative):`, factorial(n));
  console.log(`Factorial of ${n} (recursive):`, factorialRecursive(n));
  console.log(`Factorial of 0:            `, factorial(0));

  // Test 2: Prime Check
  const testNumbers = [1, 2, 3, 4, 17, 18, 19, 29, 100];
  console.log('\nPrime Check:');
  testNumbers.forEach(num => {
    console.log(`  Is ${num} prime? ->`, isPrime(num));
  });

  // Test 3: Fibonacci Sequence
  const terms = 10;
  console.log(`\nFibonacci Sequence (${terms} terms):`, fibonacciSequence(terms));
}


/**
 * ==========================================
 * JavaScript Array Functions
 * ==========================================
 * This module demonstrates core array manipulation concepts in JavaScript:
 * - Iterating through arrays and tracking extremes (min/max)
 * - Array aggregation using loops and `Array.prototype.reduce`
 * - Higher-Order Functions: passing callback predicates to filter arrays
 */

/**
 * 1a. Find Maximum Value in an Array
 * ---------------------------------
 * Concept:
 * An array can be scanned element-by-element to keep track of the largest value.
 * Modern JavaScript also provides `Math.max(...arr)` using the spread operator (`...`),
 * which spreads array elements as arguments into the `Math.max` function.
 *
 * @param {number[]} arr - Array of numbers
 * @returns {number|null} Maximum number, or null if the array is empty
 */
function findMax(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  if (arr.length === 0) {
    return null;
  }

  // Iterative approach:
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Alternative approach: Using Math.max and spread operator
 */
function findMaxSpread(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

/**
 * 1b. Find Minimum Value in an Array
 * ---------------------------------
 * Concept:
 * Scans the array and tracks the smallest value seen so far.
 *
 * @param {number[]} arr - Array of numbers
 * @returns {number|null} Minimum number, or null if the array is empty
 */
function findMin(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  if (arr.length === 0) {
    return null;
  }

  // Iterative approach:
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * Alternative approach: Using Math.min and spread operator
 */
function findMinSpread(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.min(...arr);
}

/**
 * 2. Sum of Array Elements
 * ------------------------
 * Concept:
 * Accumulation combines each element into a single accumulated result.
 * - Iterative approach: initialize an accumulator at 0 and add each number in a loop.
 * - Functional approach: `.reduce((accumulator, currentValue) => accumulator + currentValue, 0)`
 *
 * @param {number[]} arr - Array of numbers
 * @returns {number} The sum of all elements
 */
function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  // Using reduce (idiomatic JavaScript):
  return arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
}

/**
 * Alternative approach: Classic for loop
 */
function sumArrayLoop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/**
 * 3. Filter Array by Condition
 * ----------------------------
 * Concept (Higher-Order Function):
 * A function that takes another function (a predicate/condition callback) as an argument.
 * For each element:
 *   - If `conditionFn(element)` returns true, keep the element.
 *   - If false, omit it.
 *
 * This demonstrates how JavaScript's native `Array.prototype.filter` works under the hood.
 *
 * @param {Array} arr - The array to filter
 * @param {Function} conditionFn - Callback function returning true/false for each item
 * @returns {Array} A new array containing only elements that satisfy the condition
 */
function filterArray(arr, conditionFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  if (typeof conditionFn !== 'function') {
    throw new TypeError('conditionFn must be a function');
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // Pass element, index, and full array to match JS conventions
    if (conditionFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Module exports for importing into other files
module.exports = {
  findMax,
  findMaxSpread,
  findMin,
  findMinSpread,
  sumArray,
  sumArrayLoop,
  filterArray,
};

// If run directly with `node arrayFunctions.js`, execute test demonstrations
if (require.main === module) {
  console.log('--- Array Functions Demos ---');

  const numbers = [12, 5, 8, 130, 44, 3, 99];
  console.log('Sample Array:         ', numbers);

  // Test 1: Max and Min
  console.log('Maximum (Loop):       ', findMax(numbers));
  console.log('Maximum (Spread):     ', findMaxSpread(numbers));
  console.log('Minimum (Loop):       ', findMin(numbers));
  console.log('Minimum (Spread):     ', findMinSpread(numbers));

  // Test 2: Sum of Array
  console.log('\nSum of Array (reduce):', sumArray(numbers));
  console.log('Sum of Array (loop):  ', sumArrayLoop(numbers));

  // Test 3: Filter Array
  // Condition 1: Keep only even numbers
  const evens = filterArray(numbers, num => num % 2 === 0);
  console.log('\nFiltered (Evens only):', evens);

  // Condition 2: Keep numbers greater than 20
  const greaterThan20 = filterArray(numbers, num => num > 20);
  console.log('Filtered (> 20):      ', greaterThan20);
}


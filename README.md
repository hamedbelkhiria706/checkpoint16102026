# JavaScript Core Concepts & Functions

This repository contains modular JavaScript files demonstrating core algorithms and language concepts across three categories: **String Manipulation**, **Array Functions**, and **Mathematical Functions**.

---

## File Structure

- [`stringManipulation.js`](./stringManipulation.js): String reversing, character counting, and word capitalization.
- [`arrayFunctions.js`](./arrayFunctions.js): Finding min/max, array summing, and custom filtering using callback functions.
- [`mathFunctions.js`](./mathFunctions.js): Factorial (iterative & recursive), prime number check, and Fibonacci sequence generation.
- [`index.js`](./index.js): Main runner that imports all modules and demonstrates each function with test cases.

---

## 1. String Manipulation Functions

### `reverseString(str)`
- **Concept:** In JavaScript, strings are primitive and immutable (they cannot be modified in-place).
- **Technique:** Convert the string to an array of characters with `.split('')`, invert the array using `.reverse()`, and rejoin it with `.join('')`.
- **Alternative:** Iterating backwards from `str.length - 1` to `0` and accumulating characters.

### `countCharacters(str, ignoreSpaces = false)`
- **Concept:** Accesses the `.length` property of a string.
- **Bonus:** Supports an optional boolean flag `ignoreSpaces` that uses regular expressions (`str.replace(/\s+/g, '')`) to ignore whitespace.

### `capitalizeWords(sentence)`
- **Concept:** Splits a sentence into individual words with `.split(' ')`, maps over each word to uppercase the first character (`charAt(0).toUpperCase()`) and lowercase the remainder (`slice(1).toLowerCase()`), and joins them back together.

---

## 2. Array Functions

### `findMax(arr)` & `findMin(arr)`
- **Concept:**
  - **Iterative approach:** Loops through the array maintaining a running extreme value.
  - **Spread operator approach:** Uses `Math.max(...arr)` and `Math.min(...arr)` to expand the array elements as function arguments.

### `sumArray(arr)`
- **Concept:** Accumulation. Demonstrates `Array.prototype.reduce((acc, curr) => acc + curr, 0)`, one of the most powerful functional programming methods in JavaScript.

### `filterArray(arr, conditionFn)`
- **Concept:** Higher-Order Functions & Callbacks.
- **How it works:** Implements a custom filtering algorithm from scratch without relying directly on `Array.prototype.filter`. Accepts a predicate function `conditionFn` and pushes matching elements to a new array.

---

## 3. Mathematical Functions

### `factorial(n)`
- **Concept:** Calculates \(n! = n \times (n-1) \times \dots \times 1\), with \(0! = 1\).
- **Implementations:**
  - Iterative: Avoids call stack limitations.
  - Recursive: Illustrates base cases and self-calling functions.

### `isPrime(num)`
- **Concept:** Numbers \(\le 1\) are not prime. 2 and 3 are prime. Multiples of 2 and 3 are eliminated immediately.
- **Optimization:** Only checks odd divisors up to \(\lfloor\sqrt{n}\rfloor\) using the \(6k \pm 1\) primality test rule, reducing time complexity from \(O(n)\) to \(O(\sqrt{n})\).

### `fibonacciSequence(numTerms)`
- **Concept:** A sequence where each number is the sum of the preceding two:
  \[ F_0 = 0, \quad F_1 = 1, \quad F_n = F_{n-1} + F_{n-2} \]
- **How it works:** Initializes `[0, 1]` and appends successive terms iteratively up to `numTerms`.

---

## How to Run

You can run individual modules or the unified demonstration runner:

```bash
# Run everything together
node index.js

# Or test individual modules separately:
node stringManipulation.js
node arrayFunctions.js
node mathFunctions.js
```


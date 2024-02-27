- symbol eql nhin hai js mein
- big int last mein n use of big int
- typeof (function=> object funtion)


# Bigint
- 
In JavaScript, the BigInt data type was introduced as part of the ECMAScript 2020 (ES11) specification to provide support for arbitrary precision integers. BigInt allows you to represent and perform arithmetic operations on integers larger than the maximum safe integer (Number.MAX_SAFE_INTEGER), which is 
2^53−1

To create a BigInt literal, you append the letter n to the end of an integer literal:
const bigIntValue = 1234567890123456789012345678901234567890n;

- Limited Support: Not all JavaScript features support BigInt yet. For example, you cannot use BigInt values as keys in objects or as properties in JSON.


# symbol
- In JavaScript, Symbol is a primitive data type introduced in ECMAScript 6 (ES6) that represents a unique identifier. Unlike other primitive data types like strings, numbers, booleans, Symbol values are immutable and unique.
  
- // Creating a symbol with an optional description
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');
const sym3 = Symbol(); // Without description

// Symbols are unique
console.log(sym1 === sym2); // Outputs: false

// Symbols with the same description are still unique
const sym4 = Symbol('foo');
console.log(sym1 === sym4); // Outputs: false


# typeof
- typeof 5;          // "number"
typeof "hello";    // "string"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object"
typeof {};         // "object"
typeof [];         // "object"
typeof function() {// "function"
typeof Symbol();   // "symbol"

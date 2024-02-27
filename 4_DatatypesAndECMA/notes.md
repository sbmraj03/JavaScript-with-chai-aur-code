alert in node not working but in browser working fine
- ecma documentation (t369) and mdn
- datatypes=> string , boolean, int, bigint

==> Range of int is upto 2^53 => if no.> int then bigint is used but it happens rarely

# Primitive Data Types:
- Number: Represents both integer and floating-point numbers. Example: let num = 10;
- String: Represents a sequence of characters. Example: let str = 'Hello, World!';
- Boolean: Represents a logical value indicating true or false. Example: let isTrue = true;
- Undefined: Represents the absence of a value. If a variable is declared but not assigned a value, it is undefined. Example: let x;
- Null: Represents the intentional absence of any object value. Example: let y = null;
- Symbol: Represents a unique identifier. Example: let sym = Symbol('description'); (Introduced in ECMAScript 6)


# Non-Primitive Data Types (also known as Reference Types):
- Object: Represents a collection of key-value pairs where keys are strings and values can be any data type, including other objects or functions. Example: let obj = { name: 'John', age: 30 };
- Array: Represents a collection of elements indexed by integers. Example: let arr = [1, 2, 3, 4, 5];
- Function: Represents a reusable block of code. Example: function add(a, b) { return a + b; }

$ typeof 42; // Output: "number"
typeof 'Hello'; // Output: "string"
typeof true; // Output: "boolean"
typeof undefined; // Output: "undefined"
typeof null; // Output: "object" (This is considered a historical bug in JavaScript)
typeof Symbol('description'); // Output: "symbol"
typeof {}; // Output: "object"
typeof []; // Output: "object"
typeof function() {}; // Output: "function" $


# alert mode in chrome and node
The alert() function is a part of the browser's JavaScript API and is not available in Node.js. It is commonly used in web browsers to display a dialog box with a message to the user.

Node.js is a server-side JavaScript runtime environment, and it doesn't have access to the same APIs and functionalities that web browsers provide. In server-side JavaScript environments like Node.js, there is no DOM (Document Object Model) or browser window, so functions like alert(), confirm(), and prompt() are not available.

In Node.js, if you want to display messages to the user or handle user interactions, you typically use other methods such as writing messages to the console (console.log()), reading from standard input (process.stdin), or using frameworks like Express.js for building web servers and handling HTTP requests and responses.




# ECMA Documentation adn mdn
-$ ECMAScript is the standardization of JavaScript, and it's maintained by Ecma International. JavaScript implementations follow the ECMAScript standard to ensure consistency and interoperability across different environments and platforms. $



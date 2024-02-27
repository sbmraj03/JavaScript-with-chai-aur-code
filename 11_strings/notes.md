var str = 'JavaScript';

console.log(str.length); // Outputs: 10

console.log(str.charAt(0)); // Outputs: J
console.log(str[1]); // Outputs: a

console.log(str.substring(0, 4)); // Outputs: Java
$ console.log(str.slice(4)); // Outputs: Script $

console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
$ console.log(str.indexOf('Script')); // Outputs: 4 $

console.log(str.replace('JavaScript', 'TypeScript')); // Outputs: TypeScript



# Some more properties:
- var gameName1 = 'Chess';
    console.log(Object.getPrototypeOf(gameName1)); 
    use this in chrome to get all teh prototypes related to string gameName1

- var str = 'Hello, world!';
var slicedStr1 = str.slice(-6); // Starts from the 6th character from the end: 'world!'
var slicedStr2 = str.slice(-12, -7); // Starts from the 12th character from the end and ends at the 7th character from the end: 'Hello'

var arr = [1, 2, 3, 4, 5];
var slicedArr1 = arr.slice(-3); // Returns [3, 4, 5] (last three elements)
var slicedArr2 = arr.slice(-4, -1); // Returns [2, 3, 4] (from the second-to-last to the fourth-to-last elements)


# To get all the strings method avl in string, use:
- var gameName1 = 'Chess';
console.log(Object.getPrototypeOf(gameName1)); // Outputs: [String: '']


# slice in string
- var str = 'Hello, world!';
var slicedStr1 = str.slice(-6); // Starts from the 6th character from the end: 'world!'
var slicedStr2 = str.slice(-12, -7); // Starts from the 12th character from the end and ends at the 7th character from the end: 'Hello'

var arr = [1, 2, 3, 4, 5];
var slicedArr1 = arr.slice(-3); // Returns [3, 4, 5] (last three elements)
var slicedArr2 = arr.slice(-4, -1); // Returns [2, 3, 4] (from the second-to-last to the fourth-to-last elements)

# string interpolation
- String interpolation is a feature in many programming languages that allows you to embed expressions or variables within a string literal. It provides a convenient way to create strings with dynamic content without using concatenation or complex string manipulation.
- const name = 'John';
const age = 30;

// Using template literals for string interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // Outputs: Hello, my name is John and I am 30 years old.


# new Keyword in js
i) instance: Instances allow us to create multiple objects with similar characteristics but distinct data.

- function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating an instance of Person using 'new'
var person1 = new Person("John", 30);
var person2 = new Person("Alice", 25);

console.log(person1.name); // "John"
console.log(person2.age);  // 25


- [[ new keyword basically calls the constructor if we not use the new word then js will read it as normal function and not as constructor
browser ke ander jo global obj hai wo hai window obj whil ein node it is empty

implicity adn explicit rtn in arrow fxn

# this keyword in node.js env
- console.log(this === global); // Output: false
- function greet() {
    console.log(this === global); // Output: true
}

greet(); // Called in the global context

- console.log(this === exports); // Output: true
- const obj = {
    name: 'Alice',
    greet: () => {
        console.log('Hello, ' + this.name); // Output: Hello, undefined
    }
};

obj.greet(); // Arrow function inside object method


# this keyword in browser env
- console.log(this === window); // Output: true
- // Method
const person = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // Output: John

// Standalone function
function showThis() {
    console.log(this === window); // Output: true (in non-strict mode)
}
showThis(); // Output: true

- const obj = {
    name: 'Alice',
    greet: () => {
        console.log(this.name); // 'this' here refers to the global scope, not the 'obj'
    }
};
obj.greet(); // Output: undefined (or global object value)


# Implicit Return:
- An implicit return occurs when the arrow function body is a single expression. In this case, the arrow function implicitly returns the result of the expression without using the return keyword.
  
- const add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8

# Explicit Return:
- An explicit return occurs when the arrow function body contains curly braces {}. In this case, you must use the return keyword to explicitly return a value from the function.

- const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(8, 3)); // Output: 5

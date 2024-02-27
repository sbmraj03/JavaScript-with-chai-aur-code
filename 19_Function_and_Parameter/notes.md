- function execution and reference
# function execution
-In this example, we define a function called greet that takes a name parameter and logs a greeting message to the console. We then execute the function by calling it with the name "John".
- // Function Execution
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('John'); // Output: Hello, John!


# function reference
- In this example, we define a function called greet as before. However, instead of immediately executing it, we create a reference to the function by assigning it to a variable called sayHello. We can then use this reference to call the function later.
-
function greet(name) {
    console.log('Hello, ' + name + '!');
}

const sayHello = greet; // Creating a reference to the greet function
sayHello('Alice'); // Output: Hello, Alice!

# Hoisting
- Hoisting: Variables declared with var are hoisted to the top of their scope, while functions declared using function declarations are also hoisted. However, function expressions are not hoisted.
Block Scope: Variables declared with let and const have block scope, meaning they are only accessible within the block in which they are defined.

- console.log(x); // Output: undefined
var x = 5;
 $ The above code is interpreted by JavaScript as:$
        var x;
        console.log(x); // Output: undefined
        x = 5;

# Block Scope:
Block scope refers to the scope of variables and functions that are defined within a block of code, such as within loops, if statements, or function bodies. Variables and functions defined within a block are only accessible within that block and its nested blocks.
- {
    let x = 5;
    console.log(x); // Output: 5
}
console.log(x); // Error: x is not defined

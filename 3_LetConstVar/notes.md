- const for constant declr....varb-> let and var
- scope, block scope let mein scope ki pblm khtm, var use nhin hoti hai,,funcitonal scope   declr varb without datatype, undefined no declr

- *var*: This was the original way to declare variables in JavaScript. Variables declared with var are function-scoped or globally scoped, meaning their scope  is limited to the function in which they are declared, or if declared outside of a function, they are globally scoped. However, var has some issues like hoisting and lack of block scope.
    - var x = 10;

- let: Introduced in ES6 (ECMAScript 2015), let allows you to declare variables that are block-scoped. Variables declared with let are limited in scope to the block, statement, or expression on which it is used.
    - let y = 20;

- const: Also introduced in ES6, const is used to declare variables whose values should not be re-assigned. It also creates a block-scoped variable, just like let.
    - const z = 30;




- Hoisting:

Variables declared with var are hoisted to the top of their scope during the compilation phase, which means you can access the variable before it's declared without getting an error. However, the variable's value will be undefined until it's assigned a value.
Variables declared with let are also hoisted, but unlike var, they are not initialized until their declaration is evaluated during runtime. Accessing a let variable before its declaration results in a ReferenceError.

    - // Using var
        console.log(x); // undefined
        var x = 10;
        console.log(x); // 10

        // Using let
        console.log(y); // ReferenceError: y is not defined
        let y = 20;
        console.log(y); // 20

- console.log(x); // undefined
var x = 10;
console.log(x); // 10
    - JavaScript interprets the code as:
            var x;
            console.log(x); // undefined
            x = 10;
            console.log(x); // 10

- if (true) {
    var a = 10;
    let b = 20;
}

console.log(a); // Output: 10
console.log(b); // ReferenceError: b is not defined







-   function exampleFunction() {
    var localVar = "I'm a local variable";
    console.log(localVar); // This works
}

console.log(localVar); // This will throw an error




- var globalVar = "I'm a global variable";

function exampleFunction() {
    console.log(globalVar); // This works
}

console.log(globalVar); // This works too

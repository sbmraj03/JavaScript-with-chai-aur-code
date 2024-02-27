# conversions
console.log("5" + 2);    // "52" (string concatenation)
console.log("5" - 2);    // 3 (numeric subtraction)

- parseInt() vs parseFloat(): The parseInt() and parseFloat() functions parse strings into integers and floating-point numbers, respectively. However, they may behave unexpectedly when encountering non-numeric characters.
    console.log(parseInt("10px"));    // 10 (parses until non-numeric character)
console.log(parseFloat("10.5px")); // 10.5 (parses until non-numeric character)

- console.log(Number("10px"));      // NaN (Not a Number)

- console.log(+"10px");             // NaN (Not a Number)

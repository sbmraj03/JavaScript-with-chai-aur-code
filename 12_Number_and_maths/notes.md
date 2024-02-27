
- var circleArea = Math.PI * radius * radius; // Calculate the area of a circle
var absoluteValue = Math.abs(-5);            // 5
var roundedValue = Math.round(4.7);          // 5
var floorValue = Math.floor(4.7);            // 4
var ceilValue = Math.ceil(4.3);              // 5
var squareRoot = Math.sqrt(25);              // 5
var power = Math.pow(2, 3);                  // 8

# Number
- 
toFixed():

toFixed() is used to format a number with a fixed number of digits after the decimal point.
It returns a string representation of the number in fixed-point notation.
The parameter passed to toFixed() specifies the number of digits after the decimal point.
If the number has fewer decimal places than specified, zeros are padded to the end.

- toPrecision():
toPrecision() is used to format a number to a specified precision, which includes both integer and decimal digits.
It returns a string representation of the number with the specified total number of significant digits.
The parameter passed to toPrecision() specifies the total number of significant digits.
If necessary, the number is converted to exponential notation to accommodate the specified precision.


- var number1 = 1234.56789;
console.log(number1.toFixed());    // Output: "1235" (no decimal digits specified)

var number2 = 0.000123456;
console.log(number2.toFixed(3));   // Output: "0.000"

var number3 = 12345;
console.log(number3.toFixed(2));   // Output: "12345.00" (padded with zeros)



# toLocaleString
- The toLocaleString() method in JavaScript is used to format a number according to the locale-specific conventions. It returns a string representing the number in a format that is appropriate for the specified locale, including decimal separators, thousands separators, and localized number formatting.

- var number = 1234567.89;
var formattedNumber = number.toLocaleString('en-US');
console.log(formattedNumber); // Output (for 'en-US' locale): "1,234,567.89"



# Number again

- console.log(Number.MAX_VALUE);        // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        // Output: 5e-324
console.log(Number.NaN);              // Output: NaN (Not-a-Number)
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log(Number.EPSILON);           // Output: 2.220446049250313e-16


# Static Methods: (nos are ret in string)
- console.log(Number.isFinite(10));      // Output: true
console.log(Number.isNaN('hello'));    // Output: false
console.log(Number.parseInt('10'));    // Output: 10
console.log(Number.parseFloat('3.14')); // Output: 3.14
console.log(Number.isInteger(5));      // Output: true
console.log(Number.isSafeInteger(9007199254740991)); // Output: true

# Instance Methods:
- var num = 123.456;
console.log(num.toExponential(2));     // Output: "1.23e+2"
console.log(num.toFixed(2));           // Output: "123.46"
console.log(num.toPrecision(4));       // Output: "123.5"
console.log(num.toString());           // Output: "123.456"
console.log(num.valueOf());            // Output: 123.456

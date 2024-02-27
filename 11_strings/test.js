/**
 * string interpolation
 * string methods 
 * trim in string
 * 
 */
const name= "hitesh";
const repoCount= 50;

// console.log(name+ repoCount + "value"); // not used in modern days
 
// use string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// other way to define string
 const gameName= new String('hitesh-hc-com');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4);
console.log(newString);

const anotherString= gameName.slice(-8,4); // but cant give neg val in substring will ignore the neg values and starts with 0
console.log(anotherString);

const newStringOne= "   hitesh      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://shubham.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));

var gameName1 = 'Chess';
console.log(Object.getPrototypeOf(gameName1)); // Outputs: [String: '']

const score= 400;
const balance= new Number(100);
console.log(balance); 

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber= 123.89789;
console.log(otherNumber.toPrecision(3));

const hundreds= 100000000;
console.log(hundreds.toLocaleString());

// there are some more abt number properties


// ++++++++++++++++++++++ Maths ++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.min(4,3,6,8));

// we will mostly use math.random
console.log(Math.random()); // gives btw 0 and 1
console.log((Math.random()*10) +1) // 0 to 10


const min= 10;
const max= 20;
console.log(Math.floor((Math.random() * (max-min+1))) + min);
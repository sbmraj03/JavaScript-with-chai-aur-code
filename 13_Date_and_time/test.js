let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


// let myCreateDate= new Date(2023, 1, 23);
// let myCreateDate= new Date(2023, 1, 23, 5, 3);
// let myCreateDate= new Date("2023-01-14");
let myCreateDate= new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); // date se ms extract karna
console.log(Math.floor(Date.now()/1000)); // date se ms extract karna


let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{
    weekday: "long",
})
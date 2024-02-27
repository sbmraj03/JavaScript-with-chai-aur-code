// stack mem -> primitive
// heap mem=> non-primitive

let myYoutubename= "hiteshChoudhary.com";
let anotherName= myYoutubename;
anotherName= "chaiAurCode";

console.log(myYoutubename);
console.log(anotherName);

let user1= {
    email: "user@google.com", 
    upiId: "user@ybl",
};

let user2= user1;
user2.email= "hitesh@google.com";

console.log(user1.email);
console.log(user2.email);
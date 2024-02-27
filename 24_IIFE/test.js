// Immediately Invoked Function Expressions (IIFE)

// this ika named iife and its name is chai
(function chai(){
    console.log(`DB CONNECTED`);
})();  // -> here semicolon is must its a part of syntax

// function(parameters) ()

( () => {
    console.log(`DB connected TWO`);
} ) ();

( (name) => {
    console.log(`DB connected THrice ${name}`)
} ) ('Hitesh');


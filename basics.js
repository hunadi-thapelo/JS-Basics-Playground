console.log("Hello World!")
 //to print to console type node <filename.js> in terminal

let a = 10;
let b = "Hello";
console.log(a)
console.log(typeof(a)) //typeof gives you data type of variable
console.log(typeof(b2));
console.log(typeof(100.67));





/*-------------- Data type: boolean --------------*/
let isRequired = true;
console.log(typeof(isRequired))
console.log(isRequired)

/*----------------- Operator NOT ---------*/
//Negation is only applicable to Booleans
//This is when you want to reverse the

console.log(!isRequired)


/* ------ LET --------- */
let c = 123.5;
let d = 123
console.log(typeof(c))
console.log(c)

var xy = 'a variable'

//can reassign
c = a + b
xy = "a var variable is redeclarable and reassignable"
console.log(c)
console.log(xy)
console.log("A number and a string concatenated is of type: " +typeof(c))

/* ------- Symbol ------------*/
const x = Symbol('description');
const y = Symbol('another description');
console.log(x)
console.log(x === y);


//ES6 version --> let, const
/*
Difference between let, const
let is a signal that the identifier may be reassigned    
const is a signal that the identifier won't be reassigned
*/

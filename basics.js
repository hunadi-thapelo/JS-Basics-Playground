console.log("Hello World!")
 //to print to console type node <filename.js> in terminal

let a = 10;

console.log(a)
console.log(typeof(a)) //typeof gives you data type of varaible


/*String*/
let b = 'QA Engineer';
let firstName = 'Jane';
let lastName = 'Smith';

//Concatenation
let fullName1 = firstName + ' ' + lastName;

//Using JS string interpolation

let fullname = `${firstName} ${lastName}`;

console.log(typeof(b));

console.log('Print fullname below using JS concatenation:')
console.log(fullName1);

console.log('Print fullname below using JS string interpolation:')
console.log(fullname);






/*boolen*/
let isRequired = true;
console.log(typeof(isRequired))

let c = 123.5;
console.log(typeof(c))

//let c = a + b

//ES6 version --> let, const
/*
Difference between let, const

let is a signal that the identifier may be reassigned    
const is a signal that the identifier won't be reassigned
*/

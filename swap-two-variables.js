
//using a temp variable
let firstName = 'Dlamini';
let lastName = 'Naledi';
let temp;

//swap variables
temp = firstName;
firstName = lastName;
lastName = temp;

console.log(`${firstName} ${lastName}`)


//using destructing assignment - can swap strings and other data types
let a = "October";
let b = 19;

[a,b] = [b, a];
console.log(a + " " + b);
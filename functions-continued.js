/**************       VAR KEYWORD (until ES5)   ***************/
//scope of var is global if declared in global level
var greet = "Good Morning"

//this greet scope is on global level, if statement is outside the greetings function
//there greet var value will be replaced with good day
if (1 == 1){
    var greet = "Good day"
}


//or in function level only when declared in a function
function greetings(a,b){

    var greet = "Morning"
    return a+b
}

console.log(greet)


/**************       LET KEYWORD (from ES6)   ***************/

//scope of let is global if declared in global level
let greetings1 = "Halo"
greetings1 = "Ola" //reinitialized let. BOTH let and VAR can be reinitilized

//or in block level only when declared in a block in inside curly braces {}
if (1 == 1){
    let greetings1 = "Hello"
   
}
//let cannot be redeclared BUT var can be redeclared
console.log(greetings1)


/**************       CONST KEYWORD (from ES6)   ***************/
//scope of const keyword is the same a let, only difference is that it cannot be reinitilized

const dayGreetings = "Sunrise"
//dayGreetings = "Morning" //reinitialized let. BOTH let and VAR can be reinitilized

if (1 == 1){
    let dayGreetings = "Good Morning"
   
}
console.log(dayGreetings)
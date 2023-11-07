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
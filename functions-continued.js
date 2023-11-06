/**************       VAR KEYWORD (until ES5)   ***************/
//scope of var is global if declared in global level
var greet = "Good Morning"


//or in function level only when declared in a function
function greetings(a,b){

    var greet = "Morning"
    return a+b
}

console.log(greet)

function add(a,b){
    return a+b
}

let sumOfVal = add(3,9)
console.log(sumOfVal)

//Goal to optimise functions: Working anonymous function (functions expressions)

let sumOfInt = function(a,b){
    return a+b
}

console.log(sumOfInt(4,3))

let sumOfNumber =(a,b) => a+b
console.log(sumOfNumber(11,3))
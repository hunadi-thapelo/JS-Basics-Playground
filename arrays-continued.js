//preferred and simpliest vway to declare an array
var marks = [80,79,91,85]

/*Reduce method another method in place of For Loop*/

//reduce method takes two arguments
//mark is the individual value from array e.g 55
//sum is the accumalator - it changes at each iteration
//0 is the initilize
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
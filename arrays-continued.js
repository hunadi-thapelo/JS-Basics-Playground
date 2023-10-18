//preferred and simpliest vway to declare an array
var marks = [80,79,91,85]

/*Reduce method another method in place of For Loop*/

//reduce method takes two arguments
//mark is the individual value from array e.g 55
//sum is the accumalator - it changes at each iteration
//0 is the initilize
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

console.log('create new array with even numbers')
//Goal: create new array with even numbers
var points = [11, 9, 5, 4, 7, 10, 3, 2, 1, 6, 200]
var newPoints = []

for( var i = 0; points.length > i; i++){

    if(points[i] % 2 == 0){

        newPoints.push(points[i])
    }
}

console.log(newPoints)

/*Goal: create new array with even numbers
USING FILTER METHOD
*/
let newFilteredPoints = points.filter(point=>point%2 == 0)
console.log(newFilteredPoints)

/*Goal: USING MAP METHOD multiply each element by 3 in newPoints array
*/

let newMappedArray = newPoints.map(point=>point * 3)
console.log(newMappedArray)
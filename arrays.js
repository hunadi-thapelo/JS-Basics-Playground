var marks = Array(6)
var marks = new Array(55,67,90,88,78,93)

//preferred and simpliest vway to declare an array
var marks = [55,67,90,88,78,93]

console.log(marks.length) //get length or number of elements in array
marks[3] = 90 //change an value in array
marks.push(65) // add a new value at end of array

console.log(marks.length) //get length or number of elements in array
console.log(marks)
marks.pop()//removes the last element from the array
marks.unshift(65)//adds element at the start of the array
console.log(marks)
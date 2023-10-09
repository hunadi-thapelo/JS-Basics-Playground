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
console.log(marks) //[ 65, 55, 67, 90, 90, 78, 93 ]


console.log(marks.indexOf(90)) //returns index of element 78 = which is 3

/*Handling when there are more than one?? 
Use iteration, For Loop
*/
var results = [];
for(i=0;i<marks.length;i++){
    if(marks[i] == 90){
        results.push(i);
    }
}
//[ 65, 55, 67, 90, 90, 78, 93 ] = index 3, 4
console.log(results)

//NB: this is used in automation tests - checking if element exists in an array or not
console.log(marks.includes(90))


/* START: New array to work with slice operation */

//preferred and simpliest vway to declare an array
var firstTermMarks = [66,90,80,79,91,85,54,71,52, 100, 69]
subFirstTermMarks = firstTermMarks.slice(2,6) //80,79,91,85,
console.log(subFirstTermMarks)

/* END: New array to work with slice operation */

//sum values in array
var sum = 0
for(i=0; i<subFirstTermMarks.length; i++){

    sum = sum + subFirstTermMarks[i]

}

console.log('Total sum is ' + sum) //335
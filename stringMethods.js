let sport = "Basketball "
//day = "Congratulations"

//Get length of string
console.log(sport.length)

//Get length of string
let subSport = sport.slice(0,6) //starts count from 0...
console.log(subSport) // Basket

//access character in string
console.log(sport[0]) //B

/* Split method to split string into an array */
// Basket   all
let sportSplit = sport.split("b")
console.log(sportSplit[0]) // Baseket
console.log(sportSplit[1]) // all

//Working with trim function
console.log(sportSplit[1].length) // 4
console.log(sportSplit[1].trim().length)

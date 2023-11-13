let sport = "Basketball "
//day = "Congratulations"

//Get length of string
console.log(sport.length)

//Get a SubString
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


//Convert String to Number

let today = "10"
let restDay = "18"

let daysLeft = parseInt(restDay) - parseInt(today)
console.log("No. of days left: " + daysLeft)

//Concatenate two Strings
let newString = "I have never played "+sport
console.log(newString)

//Find index of..
let newString2 = "The "+sport+"goal net is in the basket net next to the netball bag"
console.log(newString2)
let indexVal = newString2.indexOf("net")
console.log(indexVal) //index = 20 (starts count from 0, includes spaces) 
//The Basketball goal net is in the basket net


//Count of occurances
let counter = 0
while(indexVal !== -1)
{
    counter++
    indexVal = newString2.indexOf("net", indexVal+1)
}
console.log(counter)

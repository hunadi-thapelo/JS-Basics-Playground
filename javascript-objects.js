//a collection of properties

let person = {
    firstName: "Naledi",
    lastName: "Dlamini",
        age: 12,
    fullName: function(){
        console.log(this.firstName+' '+this.lastName)
    }    
}

console.log(person.fullName())
console.log(person.firstName)
console.log(person["lastName"])

//Change a property value
person.firstName = "Rebathile"
console.log(person.firstName)

//Add a property to existing object
person.gender = "female"
console.log(person)

//Delete property in object
delete person.gender
console.log(person)

//Check if property exists in object
console.log("firstName" in person)

// Iterate object to print values of the JS object
/* using enhanced For loop */
for(let key in person){

    console.log(person[key])

}


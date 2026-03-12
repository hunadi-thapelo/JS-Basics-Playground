//a collection of properties

const person = {
    firstName: "Naledi",
    lastName: "Dlamini",
        age: 12,
    fullName: function() {  //how to read this: fullName is of type function that returns nothing (property) fullName: () => void)
       console.log(this.firstName+' '+this.lastName)
    }    
}

//console.log(person)
person.fullName()
console.log(person.firstName)
console.log('=================Using bracket notation to access properties of an object=================')
console.log(person["lastName"])

console.log('=================Change a property value=================')
person.firstName = "Rebathile"
console.log(person.firstName)


console.log('=================Add gender property to existing object=================')
person.gender = "female"
console.log(person)

console.log('=================Delete gender property in object=================')
delete person.gender
console.log(person)

console.log('=================Check if firstName property exists in object=================')
console.log("firstName" in person)
console.log("gender" in person)

console.log('=================Iterate object to print values of the JS object using enhanced For loop=================')
 for(let key in person){

     console.log(person[key])

 }


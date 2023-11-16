//a collection of properties

let person = {
    firstName: "Naledi",
    lastName: "Dlamini"
}

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


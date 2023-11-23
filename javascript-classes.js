module.exports = class Person{
    
    //define property of class
    age = 30

    /*getter method if prop holds multiple lines of code
      get is just a property and not a method
    */
    get city(){
        return 'Johannesburg'

    }
    constructor(firstName, lastName) //instance variable = firstname + lastname
    {
      //to get scope of variables outside this method create this.
      this.firstName = firstName
      this.lastName = lastName
    }

    fullName(){
      console.log(this.firstName +" " +this.lastName)
    }
}

/*
//To access property - create object of class
let personOne = new Person("John", "Doe")
let personTwo = new Person("Pam", "Jones")
personOne.fullName()
personTwo.fullName()
console.log(personOne.age)
console.log(personOne.city)
*/
class Person{
    
    //define property of class
    age = 30

    /*getter method if prop holds multiple lines of code
      get is just a property and not a method
    */
    get city(){
        return 'Johannesburg'

    }

}

//To access property - create object of class
let personOne = new Person()
console.log(personOne.age)

console.log(personOne.city)
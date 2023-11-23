/*
Inheritance is the main pillar in object oriented programming
One class can inherit/acquire the properties or methods of another class
the class which inherits the properties of other is known as subclass (derived class)
the clas whose properties are inherited is known as super class
*/
const Person = require ('./javascript-classes.js')
class Pet extends Person {


    get location(){ //this then overrides the parent class location method
        return "Fourways"
    }
    constructor(firstName, lastName) //parent constructor has to be the same as in subclass 
    {
      //call parent class constructor
      super(firstName, lastName)
    }

}

let myPet = new Pet("Miss", "Monk")
myPet.fullName()
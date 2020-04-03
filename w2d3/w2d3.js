"use strict"
//####################### QUESTION ONE ################################################

const Persons = {
    name : "",
    dateOfBirth :"",
    getName : function(){
        return this.name;
    },
    setName : function(newName){
        this.name  = newName;
    },
    getSummary: function(){
        return `The person's name is ${this.name}. \n ${this.name} was born on ${this.dateOfBirth}`;
    }

};

const john = Object.create(Persons);
john.setName("John");
john.dateOfBirth = "10th Dec 1998";

console.log(john.getSummary());

//####################### QUESTION TWO ################################################

const Employee = Object.create(Persons);
Employee.salary = 0.0;
Employee.hireDate = new Date();
Employee.doJob = function(jobTitle){
    console.log(`${Employee.name} is a ${jobTitle} who earns $ ${Employee.salary}`);
};

Employee.setName("Anna");
Employee.salary = 249995.50;
Employee.doJob("Programmer");

//######################## QUESTION THREE ##############################################

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

Person.prototype.toString = function(){
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;
};

const person1 = new Person("John", "10th Dec 1998");
console.log(person1.toString());


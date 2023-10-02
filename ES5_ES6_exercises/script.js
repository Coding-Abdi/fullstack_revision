// change everything below to the newer Javascript!

// Q1
// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

// Answer 1
let a ='test';
const b = true;
const c = 789;
a = 'test2';


// Q2
// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city      : "London"
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const eyeColor = person.eyeColor;

// Answer 2

const { firstName, lastName, age, eyeColor, city } = person;


// Q3
// Object properties (variables already created in Answer 1)
// let a = 'test';
// let b = true;
// let c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// Answer 3

const okObj2 = {
    a, b, c
};


// Q4
// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// Answer 4

let messageBest = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

// Q5
// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// Answer 5
const ValidAge = (age =10) => age;

// Q6
// Symbol
// Create a symbol: "This is my first Symbol"

// Answer 6
let sym1 = Symbol("This is my first symbol");

// Q7
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// Answer 7
const whereAmIAgain = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
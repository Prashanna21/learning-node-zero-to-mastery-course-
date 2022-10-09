// Destructuring Is an functionality in new Es6 where you can destructure array or Object in Javascript

// Array
const listOfFruits = ['Apple', 'Orange', 'Papaya', 'Banana', 'Guava']

let [first, second] = listOfFruits

console.log(`${first} and ${second}`)

//spread Operators

let [firstt, secondd, , ...rest]  = listOfFruits

console.log(`${firstt} and ${secondd} and ${rest}`) //Skipped the Papaya


//Object Destructuring

let obj = {
    "Name" : "Prashanna",
    "Caste" : "Maharjan", 
    
}

let {Name} = obj

console.log(Name)

//It is a good practice to use Object Destructuring in Node JS while using Require if we know we are 
// Only using specific functionality of the Object

//For Eg:

const {request} = require('https')

const req = request("https://google.com")


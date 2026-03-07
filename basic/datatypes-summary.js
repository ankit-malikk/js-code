//primitive

// 7 types: string, number, boolearn, null, undefined, symbol, bigint

//reference (non primitive)

//array, objects, functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('1234')
// console.log(id === anotherId);

const bigNumber = 345335443534546549n

const heros = ("shaktiman", "nnagraj" );
let myObj = {
    name: "Ankit",
    age: 22,
}

const myFunction = function(){
    console.log("helloworld");
    
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// Primitive data types

// 7 Types : String , Number, Boolean, null, undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);

 const bigNumber = 2356576666n
 



//Refrence Type (Non-Primitive)

// Arrays, Objects ,Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Anuj",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}
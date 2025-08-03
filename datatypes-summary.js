//    Primitive

//    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue  = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const anotherId = Symbol('123')

const bigNumber = 986326342639834324242422242n



// Refrence (non-premitive)

// Array, Objects, Functions

const heros = ["Batman", "Superman", "IronMan"]
const student = {
  name:"Paras",
  rollNo:"18",
}

let myObj = {
  villageName:"Malsar",
  district:"Jhunjhunu",

}

const myfunction = function(){
  console.log("hello world");
}





//                   ---typeof Operator Results---
// type of val                                             Result
// undefined                                               "undefined"
// null                                                    "object"
// Boolean                                                 "boolena"
// Number                                                  "number"
// String                                                  "string"
// Object(native and does not implement [[Call]])          "object"
// Object(native or host and does implement [[Call]])      "function"
// Object(host and does not  implement[[Call]])            implementation-defined except may not be "undefined","boolean", "number", or "string"


//   --Stack (Primitive), 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
 
// Heap (Non-Primitive)   Array, Objects, Functions



let myInstagramName = "Paras.Chowdhary444"

let anothername = myInstagramName
anothername = "Pawan.Chowdhary" 

console.log(myInstagramName);
console.log(anothername)


let userOne = {
  email:"parasmahla222@gmail.com",
  upiId:"88906482@ybl"
}


let userTwo = userOne

userTwo.email = "Paras444@gmail.com"

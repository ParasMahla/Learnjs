// ++++++++++++++++++++++++  Numbers  ++++++++++++++++++++++++++++++++++
const score = 400;


const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString()) // According to the indian standards 
console.log(hundreds.toLocaleString('en-IN')) // According to the indian standards 




//  +++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.floor());
console.log(Math.ceil());
console.log(Math.min(3, 4, 8, 7));
console.log(Math.random());   //always all the values comes in between 0 and 1. if we want to play with greater numbers we should use the multiplication
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)))
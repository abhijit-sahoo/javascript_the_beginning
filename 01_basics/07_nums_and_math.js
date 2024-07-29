const score = 400
console.log(score);

const balance = new Number(100)//
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 23.8966
const otherNumberOne=123.8966
console.log(otherNumber.toPrecision(3));    //23.9
console.log(otherNumberOne.toPrecision(3)); //124


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //indian standard , default: US standard

//++++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-7)); // absolute value
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));// floor means lower value // 4
console.log(Math.ceil(4.3));// ceil means upper value // 5


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min +1))+min)
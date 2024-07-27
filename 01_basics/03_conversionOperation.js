// let score1 = 33
// let score2 = "33"
// let score3 = "33abc" 
// let score4 = null
// let score5;

// let valueInNumber2 = Number(score2)  //type conversion
// console.log(typeof (score2))         //string---Not Confusing
// console.log(typeof (valueInNumber2)) //number
// console.log(valueInNumber2)          //33

// let valueInNumber3 = Number(score3)  //type conversion
// console.log(typeof (score3))         //string
// console.log(typeof (valueInNumber3)) //number
// console.log(valueInNumber3)          //NaN (Not a Number)why?

// let valueInNumber4 = Number(score4)
// console.table([score4,typeof (score4),valueInNumber4] ) //null, object, 0

// let valueInNumber5 = Number(score5)
// console.table([score5,typeof (score5),valueInNumber5] ) // undefined, undefined, NaN

/**************************
boolean type conversion

1=>true ; 0=> false
""=> false;
"hitesh" => true
***************************/

/****************operations**************/
console.log(2**3) // 8 (2 to the power 3)

let str1= "hello"
let str2= " Abhijit"

let str3 = str1 + str2
console.log(str3);//hello Abhijit

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(2 + 3 + "4");//54
console.log(true) // true
console.log(false) // false
console.log(+true) // 1 //not prefer
console.log(+"") // 0 //not prefer

let sahoo = 100
console.log([sahoo++, sahoo, ++sahoo, sahoo, sahoo++, sahoo]) // [ 100, 101, 102, 102, 102, 103 ]









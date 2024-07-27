let score1 = 33
let score2 = "33"
let score3 = "33abc" 
let score4 = null

let valueInNumber2 = Number(score2)  //type conversion
console.log(typeof (score2))         //string---Not Confusing
console.log(typeof (valueInNumber2)) //number
console.log(valueInNumber2)          //33

let valueInNumber3 = Number(score3)  //type conversion
console.log(typeof (score3))         //string
console.log(typeof (valueInNumber3)) //number
console.log(valueInNumber3)          //NaN (Not a Number)why?

let valueInNumber4 = Number(score4)
console.table([score4,typeof (score4),valueInNumber4] ) //null, object, 0


"use strict"; // treat all JS code as newer JS// classes, module, arrow function etc

//alert(3+3) // ReferenceError: alert is not defined //we are using node.js, not browser

// console.log(3+3) console.log("Abhijit") //SyntaxError: Unexpected identifier 'console'

console.log(3+3); console.log("Abhijit")// above error can be avoided by ';' semicolon however its not a good practice // disturbs the readability of the code

let name = "hitesh"
let age = 18
let isLoggedIn = false


//number => 2 to power 53
//bigint (use while working with stock price etc)
//string =>""
//boolean => true / false
//null => statndalone value no zero//its a object
//undefined => when value is not defined
//symbol=> provide uniqueness (react, figma tools)

// object

console.table([typeof("hitesh"),typeof(undefined),typeof(18),typeof(null)])
/* 
|(index)  │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'undefined' │
│ 2       │ 'number'    │
│ 3       │ 'object'    │
└─────────┴─────────────┘
*/

//< > <= >= == != === !==
//if statement

// const temprature = 41
// if (temprature === 41 ){
//     console.log(`${temprature} is the temp. at delhi`)
// }

//if else statement
// const tempOne = 41

// if (tempOne == 40){
//     console.log("if statement excecuted")


// } else {
//     console.log("else statement excecuted")
// }

//Scope related
// const score = 200 
// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`)

// }
// console.log(`User power: ${power}`);//ReferenceError: power is not defined

/************* OUTPUT
 User power: fly
/workspaces/refresh-javascript/04_control_flow.js/01_one.js:27
console.log(`User power: ${power}`);
                           ^
*/

//implicit Scope //scope declared without curly braces

//const balance = 1000

// if (balance > 500 ) console.log("test"),
//console.log("test2"); //in implicit scope statements are separated by comma ","
                        // prefer not to write in this way, code lacks readability

// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900 ){
//     console.log("less than 900")
// }else {
//     console.log("less than 1200")
// }                        

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
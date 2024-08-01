//Scope

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

//All worked fine no issue for above.

//{} -->scope


/*
if(true){
    let a = 10;
    const b = 20;
    var c = 30;//or c = 30 also raise same problem


}

//console.log(a)//ReferenceError: a is not defined// a is defined inside the scope
//console.log(b)//ReferenceError: b is not defined// b is defined inside the scope
console.log(c)//output: 30 // even if c is defined inside the scope due to "var" it is accessible from outside
*/

/*
var c = 200;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;


}
console.log(c)//output: 30 //so var is not prefered to use
*/

//Block scope And Global Scope//

let a = 300;//Global Scope
if (true){
    let a = 10;
    const b = 15;
    console.log("INNER: ",a);//Block Scope// the variable is accessible within the block that is between the curly braces

}
console.log(a);
//output: 
//INNER:  10
//300

//+++Global scope in node environment is different from Global scope of console environment of browser++++++++++//


//function with nested scope

function one(){
    const username = "abhijit"
    function two(){
        const website = "youtube"
        console.log(username)//it is like subGlobal// "username" in accessible in 2 degree nested funtion//
    }
//console.log(website);//ReferenceError: website is not defined// website can't be access outside, it is inside block scope
two()
}

one()

// if statement with nested scope
if (true) {
    const username = "abhijit"
    if (username === "abhijit"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website)// website is tried to access after the closure//ReferenceError: username is not defined
}

//console.log(username)// username is tried to access after the closure//ReferenceError: username is not defined
 
//++++++++++++++ interesting +++++++
//ways of declaration of function

//Case1  

// function addOne(num){
//     return num + 1
// }
// console.log(addOne(5))//6 // working fine



// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5))//7 // working fine

//Case 2

console.log(addOne(5))//6 // working fine
function addOne(num){
    return num + 1
}



console.log(addTwo(5))//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

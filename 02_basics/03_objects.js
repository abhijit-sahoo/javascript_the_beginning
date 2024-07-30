//for javaScript learn two thing: 1) objects and 2) events


//singleton // object created by constructor 

// object.create // singleton

// no singleton when created using literals

/*++++ Object literals ++++++++++*/

const mySym = Symbol("key1") //declatation of symbol

const JsUser={
    name:"Abhijit",//comma is necessary
    "full name": "Abhijit Sahoo",
    [mySym]: "key2", // if symbol is not declared then throw error//ReferenceError: mySym is not defined // 
    age: 18, // 
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    lastLoginTime: {Monday: "0015", Saturday: "2130"}
 }  
 
console.log(JsUser.name) // not prefer much , because of some limitation, cannot be access fullname and symbols datatype
 //console.log(Jsuser.full name) // not possible, throw error// SyntaxError: missing ) after argument list
 // console.log(JsUser[name]) // ReferenceError: name is not defined
console.log(JsUser["name"]) // (" ") mark is necessary while writting in this type
console.log(JsUser["full name"])//
 
// in case of symbol
console.log(typeof JsUser["name"]) // string
console.log(JsUser[mySym]) //[Symbol(key1)]: 'key2' while console log the object

JsUser.email = "abhijit@chatgpt.com"
//Object.freeze(JsUser) //freeze the object // 
        /*freeze an object, preventing new properties from being added to it, 
        existing properties from being removed, 
        and existing properties from being changed. 
        Essentially, it makes the object immutable. */
JsUser.email = "abhijit@microsoft.com"// no error but changes not propagated
console.log(JsUser)

//object and funtion small overview

JsUser.greeting = function(){
    console.log("hello Js User")
}

console.log(JsUser.greeting) // [Function (anonymous)]
console.log(JsUser.greeting())// hello Js User

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.name} your age is ${this.age}`)//"this" refers to the object itself.
}
console.log(JsUser.greetingTwo())


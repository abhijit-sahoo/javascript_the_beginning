// this refer to current context
const user = {
    username: "abhijit",
    price: 999,
    welcomeMessage: function(){
        console.log (this) // so output will be the Object // here current context is the object
        console.log(`${this.username} , welcome to website`)
    }
}
user.welcomeMessage()
user.username = "aradhya"
user.welcomeMessage()

console.log (this)//Output:{} //there is no current context of node.js runtime env

//++++++++++ current context of browser env +++//
//global context of browser
//window object is the global object in the browser env
/*********
 * console.log (this)
 * Window {0: Window, 1: global, 2: global, 3: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
 */

/****** this inside a function */

function chai(){
    let username = "abhijit"
    console.log(this)//OUTPUT 1 //below
    console.log(typeof this)//OBJECT// this is NOT refering to the function
    console.log(this.username)// undefined //where "this" is refering that object don't have property username
}
chai()
/** OUTPUT: 1
 <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
 */
// this in ARROW FUNCTION +++++
//---------------------------------
//chaiOne()//ReferenceError: Cannot access 'chaiOne' before initialization
const chaiOne = () =>{
  let username = "Aradhya"
  console.log(this);//{}//refering to empty object
  console.log(this.username)//undefined//refering to empty object which dont have property like username

}

chaiOne()//{} //in case of normal function declaration "this" refereing to some GLOBAL object 
              //in case of arrow function the "this" refering to empty object

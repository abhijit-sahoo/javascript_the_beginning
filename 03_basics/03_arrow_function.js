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

//++++++++++current context of browser env+++//
//global context of browser
//window object is the global object in the browser env
/*********
 * console.log (this)
 * Window {0: Window, 1: global, 2: global, 3: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
 */

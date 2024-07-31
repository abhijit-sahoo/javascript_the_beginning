
// Object In depth
/************************************** */

//const tinderUserTwo = {} // Non Singleton Object
//console.log(tinderUserTwo) // output: {} //

const tinderUser = new Object() // Singleton Object
//console.log(tinderUser) // output: {} // 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
tinderUser.greeting = function(){`hello ${this.name}`}
// console.log(tinderUser)// output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Abhijit",
            lastname: "Sahoo"
        }
    }
}
console.log(regularUser.fullname) //{ userfullname: { firstname: 'Abhijit', lastname: 'Sahoo' } }
console.log(regularUser.fullname.userfullname) //{ firstname: 'Abhijit', lastname: 'Sahoo' }
console.log(regularUser.fullname.userfullname.firstname) // Abhijit
 
/*******Merging objects */

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj5 = {5:"a", 6: "d"}

// const obj3 = {obj1,obj2} //
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//Object contructor is used to merge two objects

//const obj3 = Object.assign(obj1,obj2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
//console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4 = Object.assign({},obj1,obj2) // prefered way to write the syntax// in above situation obj1, will be target Object hence Obj1 will alter, 
//currenty target object will be empty and source objects are obj1,obj2.
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 = {...obj1} //spread operator
console.log(obj6) // { '1': 'a', '2': 'b' }
const obj7 = {...obj1,...obj2,...obj5}
console.log(obj7) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'd' }

console.log(obj1,obj2,obj5) //{ '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' } { '5': 'a', '6': 'd' }

// helpfull while dealing with database

const users=[ //array of objects
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]

users[2].email="change@gmail.com" //accessing propeerties from array of objects
console.log(users)/**********[
    { id: 1, email: 'a@gmail.com' },
    { id: 2, email: 'b@gmail.com' },
    { id: 3, email: 'change@gmail.com' }
  ] */

console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn', 'greeting' ]
//Returns the ARRAY of the names of the enumerable string properties and methods of an object
//helpful to do array operation with keys
console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false, [Function (anonymous)] ]
console.log(Object.entries(tinderUser))
/*[
    [ 'id', '123abc' ],
    [ 'name', 'Sammy' ],
    [ 'isLoggedIn', false ],
    [ 'greeting', [Function (anonymous)] ]
  ]*/
console.log(tinderUser.hasOwnProperty("greeting")) //true //geeting itself is a String, as properties of object are of string dataype
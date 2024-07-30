// Array Methods

const myArr = [1,2,3,4,]
console.log(myArr) //

myArr.push("abhijit")
console.log(myArr) // [ 1, 2, 3, 4, 'abhijit' ]

myArr.push(7)
console.log(myArr) // [ 1, 2, 3, 4, 'abhijit', 7 ]

myArr.pop()
console.log(myArr)// [ 1, 2, 3, 4, 'abhijit' ]


myArr.unshift(9)
console.log(myArr) // [ 9, 1, 2, 3, 4, 'abhijit' ]

myArr.shift()
console.log(myArr)// [ 1, 2, 3, 4, 'abhijit' ]
myArr.shift()
console.log(myArr) // [ 2, 3, 4, 'abhijit' ]

console.log(myArr.includes('abhijit')) // true

console.log(myArr.indexOf('abhijit')) // 3

const newArr = myArr.join()
console.log(myArr) // [ 2, 3, 4, 'abhijit' ]
console.log(newArr,typeof (newArr)) //2,3,4,abhijit string


//++++++ Slice, splice ++++++

const orgArr=[6,5,4,3,2,1,0]
console.log("A ",orgArr)

console.log(orgArr.slice(1,3))// Returns a copy of a section of an array. For both start and end, 
                               //a negative index can be used to indicate an offset from the end of the array. 
                               //For example, -2 refers to the second to last element of the array
console.log(orgArr)

console.log(orgArr.splice(1,3))//[ 5, 4, 3 ]// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log(orgArr)// [ 6, 2, 1, 0 ]





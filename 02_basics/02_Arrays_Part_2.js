const marvel_heros=["thor","Ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]
//push
const allHeros=marvel_heros.push(dc_heros) // 4 //Appends new elements to the end of an array, and returns the new length of the array
console.log(allHeros) //4  
console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3,1]) //Ironman
console.log(marvel_heros[3][1]) //flash
console.log(marvel_heros.pop()) //[ 'superman', 'flash', 'batman' ]
console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman' ] // pop already excecuted above


//+++++ concat +++

console.log(marvel_heros.concat(dc_heros)) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]//not change the original array
console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman' ]


/* allHeros= marvel_heros.concat(dc_heros) //TypeError: Assignment to constant variable.*/
const allHeros_2 = marvel_heros.concat(dc_heros) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros_2) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//+++++++++ Array.from // //var Array: ArrayConstructor
console.log(Array.isArray("Abhijit"))//false
console.log(Array.from("Abhijit"))/*
[
    'A', 'b', 'h',
    'i', 'j', 'i',
    't'
  ]*/
console.log(Array.from({name: "Hitesh",class:"4"}))// interesting


//+++++++++ Array.from // //var Array: ArrayConstructor

let score1=200
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3))//[ 200, 300, 400 ]//Returns a new array from a set of elements




//++++++ flat

const ex_arr = [1,2,3,[4,5,6],[7,8,9,[10,11,12,[13,14,15],16,17],18,19],20]
console.log(ex_arr.flat(1))// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
/*[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    [ 10, 11, 12, [ 13, 14, 15 ], 16, 17 ],
    18,
    19,
    20
  ]*/
 console.log(ex_arr.flat(2))
 /* [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    [ 13, 14, 15 ],
    16,
    17,
    18,
    19,
    20
  ]*/
console.log(ex_arr.flat(Infinity))/*
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]*/



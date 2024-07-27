console.log("2" > 1)// true "2" is converted to number // restricted in Typescript
console.log("02"< 1)// false "2" is converted to number // restricted in Typescript

console.log(null > 0, null == 0 , null >= 0) // false false true
console.log([null > 0, null == 0 , null >= 0]) // [ false, false, true ]

/**********************
 * 
 The reason is that an equality check == and comparisions >, <, >=, <= work differently
 Comparision convert null to a number, treating it as 0. 
 Thats why null >= 0 is true and null > 0 is false
 */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//===
console.log("2"===2); // False // compare strictly as per the type of DataTYPE



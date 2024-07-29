let myDate = new Date();

console.log(myDate);// 2024-07-29T09:44:25.051Z
console.log(myDate.toString());// Mon Jul 29 2024 09:44:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jul 29 2024
console.log(myDate.toISOString()); // 2024-07-29T09:44:25.051Z
console.log(myDate.toJSON()); // 2024-07-29T09:44:25.051Z
console.log(myDate.toLocaleDateString()); // 7/29/2024
console.log(myDate.toLocaleString()); // 7/29/2024, 9:44:25 AM
console.log(myDate.toLocaleTimeString());// 9:44:25 AM
console.log(myDate.toTimeString());// 09:44:25 GMT+0000 (Coordinated Universal Time)

console.log(typeof(myDate)); //object

//+++++++++ Declaration of Date ++++++++// date 

let myCreateDate = new Date(2024, 2, 23);// months atarts from 0 to 11// if it declared as 12 or 13 output will be// 2025-01-23T00:00:00.000Z // Thu Jan 23 2025
console.log(myCreateDate);// 2024-03-23T00:00:00.000Z
console.log(myCreateDate.toDateString());// Sat Mar 23 2024

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now() //time comes in miliseconds from  midnight at the beginning of January 1, 1970,
console.log(myTimeStamp);//1722249452246
console.log(myCreatedDate.getTime());// 1674450180000 ///note always compare date in miliseconds


console.log(myCreatedDate.getDay());// 0-6 for sun-sat 









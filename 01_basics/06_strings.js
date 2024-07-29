const name ="abhijit"
const repoCount = 50

console.log(name + repoCount + " value" );//Syntax not prefer

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String ('Abhijit');
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));


const newString = gameName.substring(0,4) // Excluded the value at last index
console.log(newString)

const anotherString = gameName.slice(-7,3)
console.log(anotherString);



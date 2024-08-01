//Arrow function

const addTwo = (num1,num2) => {
    return num1 + num2 //explicit return
}
console.log(addTwo(3,8))//11//


const addThree = (num1,num2,num3) =>  (num1 + num2 + num3) //implicit return
console.log(addThree(3,8,9))//20//

// return object in arrow function

const handleObject = (username)=>({username: "abhijit"}) // curly braces --> use "return" keyword
                                                         // parentheses --> NO use of "return" keyword                     

console.log(handleObject())//{ username: 'abhijit' }
console.log(handleObject("aradhya"))//{ username: 'abhijit' }

const handleObjectOne = (username)=>({name: this.username})///this canot be used inside the function
console.log(handleObjectOne())//{ name: undefined }
console.log(handleObjectOne("aradhya"))//{ name: undefined }


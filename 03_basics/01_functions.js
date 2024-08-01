// //functions Overview

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);

// }

// addTwoNumber// No Output//function is not called
// addTwoNumber()// NaN// no arrguments are given
// addTwoNumber(4,5) // 9
// const result = addTwoNumber(4,5)//9 //function is not returning anything, it is only called here, no assinment to "result"
// console.log("result:",result);// result: undefined // no value in Result

function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("Abhijit")//function is called, excecuted, returned the message however no variable to store, no instruction given to return value
//console.log(loginUserMessage("Abhijit"))//Abhijit just logged in

//console.log(loginUserMessage(""))// just logged in// empty string + msg

console.log(loginUserMessage())//undefined just logged in // no value passed hence "undefined"

// function calculateCartPrice(...num1){//rest operator//taking  input as array
//     return num1
// }

// console.log(calculateCartPrice(200,300,500,2000))//[ 200, 300, 500, 2000 ]//array operation can be performed

function calculateCartPrice(val1,val2,...num1){//rest operator//taking  input as array
         return num1
 }
console.log(calculateCartPrice(200,300,500,2000))//[ 500, 2000 ]// num1 is taking rest of the value 




const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)//calling fuction using object as parameter
handleObject({   //calling function defining object
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
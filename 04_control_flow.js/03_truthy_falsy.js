const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " "(space inside string), [], {}, function(){}


//then how to check array is empty?//(as truthy / falsy is not possible as emptyy array is also truthy)

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// then how to check object is empty? (as truthy / falsy is not possible as empty object is also truthy)

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//Object.keys return array // then ".length" property
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10 //Output: 5
// val1 = null ?? 10 //Output: 10
// val1 = undefined ?? 15 //Output: 15
val1 = null ?? 10 ?? 20 //Output: 10
console.log(val1);


// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


















/**
When non-boolean values are used in a boolean context, 
such as the condition of an if statement, 
they will be coerced into either true or false. 
Values that are coerced into true are called truthy and values that are coerced into false are called falsy.

JavaScript contains the following falsy values:

false
0, -0 and 0n
"", '' (empty strings)
null, undefined and NaN
document.all
All other values are truthy.

Because 0 is a falsy value, the if condition in our displayLoyaltyPoints() function 
will evaluate to false when provided with a user whose loyaltyPoints property is set to 0. 
The if condition will also evaluate to false if the loyaltyPoints field does not exist (making it undefined).
 */

const user1 = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  }; // old user
  
  const user2 = {
    name: "John Smith",
    email: "john.smith@example.com",
    loyaltyPoints: 0
  }; // new user
  
  function displayLoyaltyPoints(user) {
    if (user.loyaltyPoints) {
      console.log(`User has ${user.loyaltyPoints} loyalty points`);
    } else {
      console.log("Field 'loyaltyPoints' not defined for user.");
    }
  }
  
  displayLoyaltyPoints(user1);
  displayLoyaltyPoints(user2);
  
const accountId = 144553
let accountEmail= "abhijit@google.com"
var accountPassword = "12345"
accountCity = "jaipur" // prefer not to declare like this

let accoumtState; // undefined 

console.table([accountId,accountEmail, accountPassword, accountCity])

// accountId = 2 // not allowed // TypeError: Assignment to constant variable.

accountEmail = "hc@hc.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.log(accountId)
console.table([accountId,accountEmail, accountPassword, accountCity, accoumtState]) ;

{
    var x= 23;
}

let y = x+23;
console.log(y);

{
    let p = 23;
    
}
let z = p + 20;
console.log(z);

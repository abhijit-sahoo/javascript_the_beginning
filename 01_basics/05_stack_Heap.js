
//Stack Memory (Deal with Primitive Datatype), Heap (Deal with Non-Primitive Data Type)

let myYoutubeName = "abhijitsahoo@youtube.com"

let anotherName = myYoutubeName;// copy of myYoutubeName is assigned

console.log(anotherName) // 

anotherName = "abhijit.meet@youtube.com" // => donnot affect myYoutubeName (primitive datatype)

console.log(myYoutubeName)// abhijitsahoo@youtube.com //
console.log(anotherName)// abhijit.meet@youtube.com //

let userOne={
    email: "userOne@google.com",
    upiId: "userOne@ybl"
}

let userTwo = userOne;

userTwo.email="userTwo@gmail.com" //memory reference was given to userTwo when email changed, it was change in thje memory reference   

console.log(userOne.email)
console.log(userTwo.email)











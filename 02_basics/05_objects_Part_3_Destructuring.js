//Object Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Abhijit"
}

//console.log(course.courseInstructor)//Output: Abhijit
///suppose you willing to deal with course.courseInstructor 1000 time then.
//destructuring is helpful, its just a syntactical suger/syntactic sugar
const {courseInstructor} = course
const {coursename:cName} = course

console.log(courseInstructor)//Abhijit
console.log(cName)// js in hindi

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const c = obj.a;
// const d = obj.b;

console.log(a)
console.log(b)

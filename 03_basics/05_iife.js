// Immediately Invoked Function Expressions (IIFE)
//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
//They are typically used to create a local scope for variables to prevent them from polluting the global scope.
//Avoid polluting the global namespace

(function chai(){//named IIFE
     console.log('DB CONNECTED')
})(); //iife //";" semicolon is necessary stop the started context of iife, to run next code  


//()()//TypeError: (intermediate value)(...) is not a function

//writting in arrow function

((name)=>(console.log(`DB Connected three ${name}`)))("Abhijit");//unamed IIFE

(function aurCode() {
     console.log('DB Connected two')
})();
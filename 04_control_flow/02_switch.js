//Swith Case 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"//can be any datatype

switch (month) {
    case "jan":      //can be any datatype
        console.log("January");
        break;//to break the control from tranverssing other cases
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/***********
The break statement breaks out of a switch or a loop.

In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch.

In a loop, it breaks out of the loop and continues executing the code after the loop (if any).
 */
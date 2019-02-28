/*eslint-env broswer*/
/*jslint devel: true */

//STEP 1 - halfNumber
/*function halfNumber(num1) {
    "use strict";
    var half = num1 / 2;
    window.console.log("Half of " + num1 + " is " + half + ".");
    return half;
}
halfNumber(5);*/

//STEP 2 - squareNumber
/*function squareNumber(num1) {
    "use strict";
    var squaredNum = num1 * num1;
    window.console.log("The result of squaring the number " + num1 + " is " + squaredNum + ".");
    return squaredNum;
}
squareNumber(3);*/

//STEP 3 - percentOf
/*function percentOf(num1, num2) {
    "use strict";
    var percent = (num1 / num2) * 100;
    window.console.log(num1 + " is " + percent + "% of " + num2 + ".");
    return percent;
}
percentOf(2, 4);*/

//STEP 4 - findModulus
/*function findModulus(num1, num2) {
    "use strict";
    var modulus = num1 % num2;
    window.console.log(modulus + " is the modulus of " + num2 + " and " + num1 + ".");
    return modulus;
}
findModulus(10, 4);*/

//STEP 5
//JS Function
var x = prompt("Enter a number.");
var y = prompt("Enter a second number.");
var z = prompt("Enter a third number.");
var i, base;

function calculate(numbers) {
    "use strict";
    base = Number(numbers);
    for (i = 1; i < arguments.length; i += 1) {
        base += Number(arguments[i]);
    }
    window.document.write(String(base) + "<br>");
}
calculate(x, y, z);
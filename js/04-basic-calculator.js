/*eslint-env broswer*/
/*jslint devel: true */

var calculate = prompt("Select add, subtract, multiply, or divide.");
var x = prompt("Enter a number:");
var y = prompt("Enter a second number:");
var result;

switch (calculate) {
case "add":
    result = Number(x) + Number(y);
    alert(result);
    break;
        
case "subtract":
    result = Number(x) - Number(y);
    alert(result);
    break;
        
case "multiply":
    result = Number(x) * Number(y);
    alert(result);
    break;
        
case "divide":
    result = Number(x) / Number(y);
    alert(result);
    break;
        
default:
    alert("Nope. Please select add, subtract, multiply, or divide.");
    break;
}
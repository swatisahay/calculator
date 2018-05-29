////calculator////////////
var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));


var sub = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(sub(number1, number2));

var mul = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(mul(number1, number2));

var remainder= function(number1, number2) {
  return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(remainder(number1, number2));

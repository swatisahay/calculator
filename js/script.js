////calculator////////////
var add = function(number1, number2) {
  return number1 + number2;
};



var sub = function(number1, number2) {
  return number1 - number2;
};


var mul = function(number1, number2) {
  return number1 * number2;
};


var remainder= function(number1, number2) {
  return number1 / number2;
};

//User interface(or front end) logic:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

});

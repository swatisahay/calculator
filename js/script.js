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
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result = add(number1, number2);

    $("#output").text(result);
  });

  $("form#mul").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result1 = mul(number1, number2);

    $("#output").text(result1);


  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result1 = sub(number1, number2);

    $("#output").text(result1);


  });
  $("form#div").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result1 = remainder(number1, number2);

    $("#output").text(result1);


  });

});

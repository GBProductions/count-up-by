$(document).ready(function() {
  $("#countingUp").submit(function(event) {
  event.preventDefault();

    let number1 = parseInt($("#count1").val());
    let number2 = parseInt($("#count2").val());

    
    for (let index = number2; index <= number1; index += number2) {
     
      $(".countAnswer").append(index + ',');
    }
  
  });
});
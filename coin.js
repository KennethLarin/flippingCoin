$(document).ready(function() {
  var result;
  $("#flip").click(function(){
    $('#result').empty();
    var coinValue = Math.random();
    if (coinValue >= 0.5) {
      result = 'You got tails!';
    } else {
      result = 'You got head!';
    }
      $('#result').append(result);
  }
);
});

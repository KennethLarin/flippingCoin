$(document).ready(function() {
  var coinValue = Math.random();
  if (coinValue >= 0.5) {
    var result = 'You got tails!';
  } else {
    result = 'You got head!';
  }
  $("#flip").click(function(){
       $('#result').append(result);
  }
);
});

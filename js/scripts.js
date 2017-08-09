$(document).ready(function(){
  $("#shouting").submit(function(event) {

    var shoutInput = $("input#theShout").val();
    shoutInput = shoutInput.toUpperCase();
    $(".letThemKnow").text(shoutInput);


    event.preventDefault();

    $("#toTheWorld").show();
  });
});

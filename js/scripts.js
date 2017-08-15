var puzzle = "";

$(document).ready(function(){

  $("#phrase").submit(function(event){
    event.preventDefault();
    var phrase = $("#sentence").val().split("");

    for (var index = 0; index <= phrase.length-1; index++){
      if (phrase[index] === "a" || phrase[index] === "A"){
        puzzle += "-";
      } else if (phrase[index] === "e" || phrase[index] === "E"){
        puzzle += "-";
      }else if (phrase[index] === "i" || phrase[index] === "I"){
        puzzle += "-";
      }else if (phrase[index] === "o" || phrase[index] === "O"){
        puzzle += "-";
      }else if (phrase[index] === "u" || phrase[index] === "U"){
        puzzle += "-";
      } else {
        puzzle += phrase[index];
      }
    }
    $("#phrase").hide();
    $("#result").show();
    $("h3").text(puzzle);
  });
});

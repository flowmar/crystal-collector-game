// Initialize variables
var wins = 0;
var losses = 0;
var playerNumber = 0;
var goalNumber = 0;
var berry1 = 0;
var berry2 = 0;
var berry3 = 0;
var berry4 = 0;

// When document is ready...
$(document).ready(function() {
  // Set each berry to a random value between 1 and 12.
    berry1 = Math.floor(Math.random() * 12) + 1;
    berry2 = Math.floor(Math.random() * 12) + 1;
    berry3 = Math.floor(Math.random() * 12) + 1;
    berry4 = Math.floor(Math.random() * 12) + 1;
  // Declare goal variable and set it to a random number between 19 and 120.
    var goalNumber = Math.floor(Math.random() * 120) + 19;

    $("#goal-number").html('<p id="x-concentration-text"> Chemical X Concentration Goal: <span id="goal-number-text">' + goalNumber + "</span></p>");
    $(".wins-losses").html(' <p> Wins: ' + wins + '</p><br> <p>Losses:' + losses + '</p');
    $(".current-number").html(' <p> Your Current Level of Chemical X: ' + playerNumber +'</p>');
    $('#berry1').on('click', 'button', function() {
      $(this).animate({"top": "-10px"});
    })
    $('#berry1').on('click', function(){
      playerNumber += berry1;
    });
     $('#berry2').on('click', function(){
      playerNumber += berry2;
    });
      $('#berry3').on('click', function(){
      playerNumber += berry3;
    });
       $('#berry4').on('click', function(){
      playerNumber += berry4;
    });
});


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

  // Grab the element with id goal-number and insert goal
    $( "#goal-number" ).html('<p id="x-concentration-text"> Chemical X Concentration Goal: <span id="goal-number-text">' + goalNumber + "</span></p>");

  // Grab elements with class 'wins-losses' and display variable wins and variable losses
    $( ".wins-losses" ).html(' <p> Wins: ' + wins + '</p><br> <p>Losses:' + losses + '</p>');

  // Grab elements with class 'current-number' and insert html to display current number
    $( ".current-number" ).html(' <p> Your Current Level of Chemical X: ' + playerNumber +'</p>');

    do {
  // When the berries are clicked, add the value that the berry contains to the playerNumber variable
  // and update the displayed playerNumber
    $('#berry1').on('click', function(){
        playerNumber += berry1;
        $('.current-number').text("Your current Level of Chemical X: " + playerNumber);
    });

     $('#berry2').on('click', function(){
        playerNumber += berry2;
        $('.current-number').text("Your current Level of Chemical X: " + playerNumber);
    });

      $('#berry3').on('click', function(){
        playerNumber += berry3;
        $('.current-number').text("Your current Level of Chemical X: " + playerNumber);
    });

       $('#berry4').on('click', function(){
        playerNumber += berry4;
        $('.current-number').text("Your current Level of Chemical X: " + playerNumber);

    });
     } while (playerNumber < goalNumber);

     if (playerNumber === goalNumber) {
      $('#goal-number').html('<p class="win"> YOU WON!! </p>');
      wins++;
     }

});


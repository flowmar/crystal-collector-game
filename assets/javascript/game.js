// Initialize variables
var wins = 0;
var losses = 0;
var playerNumber = 0;
var goalNumber = 2;
var berry1 = 0;
var berry2 = 0;
var berry3 = 0;
var berry4 = 0;

if (playerNumber > goalNumber) {
    $("#goal-number").html("<p class=\"loser\"> You suffered a <em>very</em> uncomfortble fate...  </p>");
    losses += 1;
    alert("death");
}
else if (playerNumber === goalNumber) {
    $("#goal-number").html("<p class=\"winner\"> You're Cured!!</p>");
    wins += 1;
    alert("You won!");
}

// When document is ready...
$(document).ready(function() {
  // Set each berry to a random value between 1 and 12.
    berry1 = Math.floor(Math.random() * 12) + 1;
    berry2 = Math.floor(Math.random() * 12) + 1;
    berry3 = Math.floor(Math.random() * 12) + 1;
    berry4 = Math.floor(Math.random() * 12) + 1;

  // Declare goal variable and set it to a random number between 19 and 120.
    goalNumber = Math.floor(Math.random() * 120) + 19;

  // Grab the element with id goal-number and insert goal
    $( "#goal-number" ).html("<p id=\"x-concentration-text\"> Chemical X Concentration Goal: <span id=\"goal-number-text\">" + goalNumber + "</span></p>");

  // Grab elements with class 'wins-losses' and display variable wins and variable losses
    $( ".wins-losses" ).html(" <p> Wins: " + wins + "</p><br> <p>Losses:" + losses + "</p>");

  // Grab elements with class 'current-number' and insert html to display current number
    $( ".current-number" ).html(" <p> Your Current Level of Chemical X: " + playerNumber +"</p>");

  // When the berries are clicked, add the value that the berry contains to the playerNumber variable
    $("#berry1").on("click", function(){
        playerNumber += berry1;

      // and update the displayed playerNumber
        $(".current-number").text("Your current Level of Chemical X: " + playerNumber);

      // If player wins or loses based on last click, perform specific actions
        if (playerNumber > goalNumber) {
            $("#goal-number").html("<p class=\"loser\"> You suffered a <em>very</em> uncomfortble fate...  </p>");
            losses += 1;
            alert("death");
        }
        else if (playerNumber === goalNumber) {
            $("#goal-number").html("<p class=\"winner\"> You're Cured!!</p>");
            wins += 1;
            alert("You won!");
        }
    });
    // Repeat for all 4 Berries
    $("#berry2").on("click", function(){
        playerNumber += berry2;
        $(".current-number").text("Your current Level of Chemical X: " + playerNumber);
        if (playerNumber > goalNumber) {
            $("#goal-number").html("<p class=\"loser\"> You suffered a <em>very</em> uncomfortble fate...  </p>");
            losses += 1;
            alert("death");
        }
        else if (playerNumber === goalNumber) {
            $("#goal-number").html("<p class=\"winner\"> You're Cured!!</p>");
            wins += 1;
            alert("You won!");
        }
    });

    $("#berry3").on("click", function(){
        playerNumber += berry3;
        $(".current-number").text("Your current Level of Chemical X: " + playerNumber);
        if (playerNumber > goalNumber) {
            $("#goal-number").html("<p class=\"loser\"> You suffered a <em>very</em> uncomfortble fate...  </p>");
            losses += 1;
            alert("death");
        }
        else if (playerNumber === goalNumber) {
            $("#goal-number").html("<p class=\"winner\"> You're Cured!!</p>");
            wins += 1;
            alert("You won!");
        }
    });

    $("#berry4").on("click", function(){
        playerNumber += berry4;
        $(".current-number").text("Your current Level of Chemical X: " + playerNumber);
        if (playerNumber > goalNumber) {
            $("#goal-number").html("<p class=\"loser\"> You suffered a <em>very</em> uncomfortble fate...  </p>");
            losses += 1;
            alert("death");
        }
        else if (playerNumber === goalNumber) {
            $("#goal-number").html("<p class=\"winner\"> You're Cured!!</p>");
            wins += 1;
            alert("You won!");
        }
    });


});
    
      


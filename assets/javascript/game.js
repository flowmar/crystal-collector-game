var wins = 0;
var losses = 0;
var playerNumber = 0;
var goalNumber = 0;
var berry1 = 0;
var berry2 = 0;
var berry3 = 0;
var berry4 = 0;


$(document).ready(function() {
    berry1 = Math.floor(Math.random() * 12) + 1;
    berry2 = Math.floor(Math.random() * 12) + 1;
    berry3 = Math.floor(Math.random() * 12) + 1;
    berry4 = Math.floor(Math.random() * 12) + 1;
    var goalNumber = Math.floor(Math.random() * 120) + 19;
    $("#goal-number").html('<p style="font-size: 2em; color: white"> Chemical X Concentration Goal: <span id="goal-number-text">' + goalNumber + "</span></p>");
    $(".wins-losses").html(' <p> Wins: ' + wins + '</p><br> <p>Losses:' + losses + '</p');
    $(".current-number").html(' <p> Your Current Level of Chemical X: ' + playerNumber +'</p>');
});


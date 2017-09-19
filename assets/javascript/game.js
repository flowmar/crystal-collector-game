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
  $('#goal-number').html(
    '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
  );
  losses += 1;
  alert('death');
} else if (playerNumber === goalNumber) {
  $('#goal-number').html('<p class="winner"> You\'re Cured!!</p>');
  wins += 1;
  alert('You won!');
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
  $('#goal-number').html(
    '<p id="x-concentration-text"> Chemical X Level to Reach: <span id="goal-numbe' +
      'rr-text">' +
      goalNumber +
      '</span></p>'
  );

  // Grab elements with class 'wins-losses' and display variable wins and variable
  // losses
  $('.wins-losses').html(
    "<div> <div class='wins'> Wins: " +
      wins +
      "</div><br> <div class='losses'>Losses:" +
      losses +
      '</div>'
  );

  // Grab elements with class 'current-number' and insert html to display current
  // number
  $('.current-number').html(
    ' <p> Your Current Level of Chemical X: ' + playerNumber + '</p>'
  );

  // When the berries are clicked, add the value that the berry contains to the
  // playerNumber variable
  $('#berry1').on('click', function() {
    playerNumber += berry1;

    // and update the displayed playerNumber
    $('.current-number').text(
      'Your current Level of Chemical X: ' + playerNumber
    );

    // If player loses based on last click, display losing messages
    if (playerNumber > goalNumber) {
      $('#goal-number').html(
        '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
      );
      losses += 1;
      $('.losses').html('<p>' + losses + '</p>');
      alert(
        'death' // If player wins based on last click, display winning messages
      );
    } else if (playerNumber === goalNumber) {
      $('#goal-number').html('<p class="winner"> You\'re Cured!!</p>');
      wins += 1;
      $('.wins').html('<p>Wins : ' + wins + '</p>');
      alert('You won!');
    }
  });

  // Repeat for all 4 Berries On click, add berry value to playerNumber and update
  // display
  $('#berry2').on('click', function() {
    playerNumber += berry2;
    $('.current-number').text(
      'Your current Level of Chemical X: ' + playerNumber
    );

    // If player loses based on last click, display losing message.
    if (playerNumber > goalNumber) {
      $('#goal-number').html(
        '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
      );
      losses += 1;
      $('.losses').html('<p>' + losses + '</p>');
      alert(
        'death' // Otherwise, if the player wins based on last click, display winning messages
      );
    } else if (playerNumber === goalNumber) {
      $('#goal-number').html('<p class="winner"> You\'re Cured!!</p>');
      wins += 1;
      $('.wins').html('<p>Wins : ' + wins + '</p>');
      alert('You won!');
    }
  });

  $('#berry3').on('click', function() {
    playerNumber += berry3;
    $('.current-number').text(
      'Your current Level of Chemical X: ' + playerNumber
    );
    if (playerNumber > goalNumber) {
      $('#goal-number').html(
        '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
      );
      losses += 1;
      $('.losses').html('<p>' + losses + '</p>');
      alert('death');
    } else if (playerNumber === goalNumber) {
      $('#goal-number').html('<p class="winner"> You\'re Cured!!</p>');
      wins += 1;
      $('.wins').html('<p>Wins : ' + wins + '</p>');
      alert('You won!');
    }
  });

  $('#berry4').on('click', function() {
    playerNumber += berry4;
    $('.current-number').text(
      'Your current Level of Chemical X:' + playerNumber
    );
    if (playerNumber > goalNumber) {
      $('#goal-number').html(
        '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
      );
      losses += 1;
      $('.losses').html('<p>Losses: ' + losses + '</p>');
      alert('death');
    } else if (playerNumber === goalNumber) {
      $('#goal-number').html('<p class="winner"> You\'re Cured!!</p>');
      wins += 1;
      $('.wins').html('<p>Wins : ' + wins + '</p>');
      alert('You won!');
    }
  });
});

$('#startButton').on('click', function startGame() {});

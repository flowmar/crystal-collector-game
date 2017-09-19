// Initial variables
var wins = 0;
var losses = 0;
var playerNumber = 0;
var goal;
var berry1 = 0;
var berry2 = 0;
var berry3 = 0;
var berry4 = 0;

// Functions

pageLoad = () => {
  $('#game').hide();
  $('#goal').hide();
  $('#current-number').hide();
  $('#stats').hide();

  startGame();
};

// Begin game when start button is clicked
startGame = () => {
  $('#start').on('click', function () {

    $('#start').fadeOut();
    $.when($('#game').slideDown()).then(function () {
      $('#goal').fadeIn();
      $('#current-number').fadeIn();
      $('#stats').fadeIn();

    })
    restartGame();
  });
};

// Reset the game and starts a new one
restartGame = () => {
  playerNumber = 0;

  // Set the goal to a number between 120 and 19
  goal = Math.floor(Math.random() * 120) + 19;

  // Set each berry to a random value between 1 and 12.
  berry1 = Math.floor(Math.random() * 12) + 1;
  berry2 = Math.floor(Math.random() * 12) + 1;
  berry3 = Math.floor(Math.random() * 12) + 1;
  berry4 = Math.floor(Math.random() * 12) + 1;

  displayStats();
  playGame();
};

displayStats = () => {
  // Display the goal number
  $('#goal').empty();
  $('#goal').html(
    '<p id="x-concentration-text" class="animated tada"> Chemical X Level to Reach:<br>' + goal + '</p>'
  );

  // Display the Wins and Losses
  $('#stats').empty();
  $('#stats').html(
    "<div> <div class='wins animated tada'> Wins:<br> " +
    wins +
    "</div><br> <div class='losses animated tada'>Losses:<br>" +
    losses +
    '</div></div>'
  );

  // Display the player's current number
  $('#current-number').html(
    ' <p class="animated fadeIn"> Your Current Level of Chemical X:<br><span class="animated tada" id="number">' + playerNumber + '</span></p>'
  );

}

// Update wins and losses
updateStats = () => {
  // Display the Wins and Losses
  $('#stats').empty();
  $('#stats').html(
    "<div> <div class='wins animated tada'> Wins:<br> " +
    wins +
    "</div><br> <div class='losses animated tada'>Losses:<br>" +
    losses +
    '</div></div>'
  );
}

// Update current number and check if player won or lost
updateNumber = () => {
  $('#number').empty();
  $('#number').fadeIn().text(playerNumber);

  // Win and lose conditions
  if (playerNumber > goal) {
    losses += 1;
    updateStats();
    $('#goal').empty();
    $('#goal').html(
      '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
    );
    $('#current-number').empty();
    $('#current-number').html(
      '<button class="btn btn-warning mt-2 animated bounceIn" id="restart">Restart</button>'
    );
    alert('death');

    $('#restart').on('click', function () {
      restartGame();
    });
  } else if (playerNumber === goal) {
    wins += 1;
    updateStats();
    $('#goal').html('<p class="winner"> You\'re Cured!!</p>');
    $('#current-number').empty();
    $('#current-number').html(
      '<button class="btn btn-warning mt-2 animated bounceIn" id="restart">Restart</button>'
    );
    alert('You won!');
    $('#restart').on('click', function () {
      restartGame();
    });
  }
}

// Game play button logic
playGame = () => {

  $('#berry1').on('click', function () {
    playerNumber += berry1;
    updateNumber();
  });
  $('#berry2').on('click', function () {
    playerNumber += berry2;
    updateNumber();
  });
  $('#berry3').on('click', function () {
    playerNumber += berry3;
    updateNumber();
  });
  $('#berry4').on('click', function () {
    playerNumber += berry4;
    updateNumber();
  });

}

pageLoad();
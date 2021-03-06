
$(document).ready(function () {

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDx0AWYiagYCV-KrEwLWdAqHouA8DEpRqA",
  authDomain: "rpsm-176e3.firebaseapp.com",
  databaseURL: "https://rpsm-176e3.firebaseio.com",
  projectId: "rpsm-176e3",
  storageBucket: "rpsm-176e3.appspot.com",
  messagingSenderId: "1085251346690"
};
const app = firebase.initializeApp(config);

const database = firebase.database();
const chats = database.ref('chat');
const connections = database.ref('connections');

// Initial player/opponent values
let con;
let player = {
  number: '0',
  name: '',
  wins: 0,
  losses: 0,
  turns: 0,
  choice: ''
}
let opponent = {
  number: '0',
  name: '',
  wins: 0,
  losses: 0,
  turns: 0,
  choice: ''
}

// -----------------------------

// Initial connection to Firebase/presence handling.
connections.once('value', function (snapshot) {
  // Check if connection '1' and/or '2' exists, -1 indicates no connection.
  if (Object.keys(snapshot.val()).indexOf('1') === -1) {
    player.number = '1';
    opponent.number = '2';
  } else if (Object.keys(snapshot.val()).indexOf('2') === -1) {
    player.number = '2';
    opponent.number = '1';
  }
  // If you got a player number, you're 1 or 2.
  if (player.number !== "0") {
    // Make player connection to Firebase and send info.
    con = connections.child(player.number);
    con.set(player);
    // When I disconnect, remove this device.
    con.onDisconnect().remove();
    // If 1 and 2 were taken, your number is still 0.
  } else {
    // Remove the name form and put the alert there.
    $('section').remove();
    $('.alert').show();
    // And disconnect from Firebase.
    app.delete();
  }
});
// Ongoing event listening.
connections.on('value', function (snapshot) {
  // If the player is connected,
  if (con) {
    // And an opponent is connected,
    if (Object.keys(snapshot.val()).indexOf(opponent.number) !== -1) {
      // Gather the latest info your opponent and also yourself.
      opponent = snapshot.val()[opponent.number];
      player = snapshot.val()[player.number];
      // If we have a name for our opponent,
      if (opponent.name.length > 0) {
        // Show the opponent. This also updates the opponents info over time.
        DOMFunctions.showOpponentInfo();
        // Once both players have a name,
        if (player.name.length > 0) {
          // Check each time whether the players have made selections.
          let choice1 = snapshot.val()['1'].choice;
          let choice2 = snapshot.val()['2'].choice;
          let turns1 = snapshot.val()['1'].turns;
          // If both have picked, run getWinner on those choices.
          if (choice1.length > 0 && choice2.length > 0) {
            getWinner(choice1, choice2);
            // If player 1 hasn't chosen yet, show them their options.
          } else if (choice1.length === 0 && turns1 === 0) {
            DOMFunctions.showMoveOptions('1');
            // Otherwise player 2 must be the one who hasn't make a choice yet.
          } else if (choice1.length > 0 && choice2.length === 0) {
            DOMFunctions.showMoveOptions('2');
          }
        }
      }
    } else if (opponent.name.length > 0 && Object.keys(snapshot.val()).indexOf(opponent.number) === -1) {
      $('.turn').text('Opponent left. Waiting for new opponent.');
      $('.wating-' + opponent.number).show();
      $('.name-' + opponent.number).empty();
      $('.win-loss-' + opponent.number). empty();
    }
  }
});
// On-click function for submitting a name.


// Functions for changing HTML elements.


// On-click function for selecting R, P, or S.


// On-click function for submitting a chat.


// Database listening function for chats.


// Win-Loss-Draw logic.
  // If there was a winner,
    // Then update your own win/loss count.
    // Then show the win.
    // Else, show the draw.

});

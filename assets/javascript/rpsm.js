
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


    // Make player connection to Firebase and send info.
    // When player disconnects, remove from database.
    // If 1 and 2 were taken, remove name from form and disconnect from Firebase.


// Ongoing event listening.
  // If both platers connected update the latest info about your opponent and also yourself.
  // If we have a name for our opponent,
  // Show the opponent and update the opponents info.
  // Once both players have a name,
    // Check each time whether the players have made selections.
    // If both have picked, run comparison on choices for winner.
      // If player 1 hasn't chosen yet, show them their options.
      // Otherwise player 2 must be the one who hasn't made a choice yet.


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

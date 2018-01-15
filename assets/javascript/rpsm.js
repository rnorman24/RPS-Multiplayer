
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDx0AWYiagYCV-KrEwLWdAqHouA8DEpRqA",
  authDomain: "rpsm-176e3.firebaseapp.com",
  databaseURL: "https://rpsm-176e3.firebaseio.com",
  projectId: "rpsm-176e3",
  storageBucket: "rpsm-176e3.appspot.com",
  messagingSenderId: "1085251346690"
};
firebase.initializeApp(config);

const database = firebase.initializeApp(config);

// Initial Values
let name = '';
let wins = 0;
let losses = 0;
let turn = 1;

// -----------------------------

// Initial connection to Firebase/presence handling.
  // Check if any players exist.
  // If no players exist add player 1.
  // If player exists add player 2,
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

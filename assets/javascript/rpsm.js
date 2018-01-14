
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

// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {

  // Display the players in the html.

});

// Add player 1

// Add player 2

// Play Game

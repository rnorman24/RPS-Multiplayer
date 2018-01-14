
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

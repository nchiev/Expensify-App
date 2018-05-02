import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDbkpn6zqWn2CxEEy1xBW7zPPms4EAoGN4",
    authDomain: "expensify-6a62c.firebaseapp.com",
    databaseURL: "https://expensify-6a62c.firebaseio.com",
    projectId: "expensify-6a62c",
    storageBucket: "expensify-6a62c.appspot.com",
    messagingSenderId: "571941257864"
  }

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Narath Chiev'
});
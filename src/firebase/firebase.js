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

const database = firebase.database();

export { firebase, database as default };
// database.ref('expenses').push({
//     description: 'Water Bill',
//     note: '',
//     amount: 4000,
//     createdAt: '5/2/2018'
// });

// database.ref('expenses').push({
//     description: 'Cellphone Bill',
//     note: '',
//     amount: 2000,
//     createdAt: '5/1/2018'
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Pizza',
//     amount: 2400,
//     createdAt: '4/1/2018'
// });

// database.ref().on('value', 
//     (dataSnapshot) => {
//         console.log(dataSnapshot.val());
//     },
//     (e) => {
//         console.log('error:' , e);
//     }
// );

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Narath Chiev',
//     age: 22,
//     stressLevel: 7,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Philadelphia',
//         state: 'PA'
//     }
// });

// database.ref('location/city').set(30);

// database.ref('attributes').set({
//     height: '5ft 7inches',
//     weight: 'Fatty Fat FAT'
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('error:' ,e)
// });

// database.ref()
// .update({
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     stressLevel: 9
// })
// .then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('error:' ,e)
// });
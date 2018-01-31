import FireBase from 'firebase'

var config = {
  apiKey: "AIzaSyBohCapVvgiFbM7LOHp4JoxYZfHDkaanII",
  authDomain: "fir-vue-9c710.firebaseapp.com",
  databaseURL: "https://fir-vue-9c710.firebaseio.com",
  projectId: "fir-vue-9c710",
  storageBucket: "fir-vue-9c710.appspot.com",
  messagingSenderId: "205891805946"
};
export const app = FireBase.initializeApp(config);
export const db = app.database();
export const userRef = db.ref('users');

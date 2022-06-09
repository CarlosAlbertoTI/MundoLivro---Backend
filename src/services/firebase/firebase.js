// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiGLVnpb706g5RLszf4Nsb08D_peqPnkI",
  authDomain: "mundolivro-15bcd.firebaseapp.com",
  databaseURL: "https://mundolivro-15bcd-default-rtdb.firebaseio.com/",
  projectId: "mundolivro-15bcd",
  storageBucket: "mundolivro-15bcd.appspot.com",
  messagingSenderId: "88789839971",
  appId: "1:88789839971:web:b6b6823b97c23be546c856",
  measurementId: "G-LJ2CR2H8KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = app
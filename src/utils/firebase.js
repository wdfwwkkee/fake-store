// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYD_cFeiLHNRs6xL0ExeNdEpE2nMBdHk",
  authDomain: "fake-store-firebase.firebaseapp.com",
  projectId: "fake-store-firebase",
  storageBucket: "fake-store-firebase.appspot.com",
  messagingSenderId: "315464666658",
  appId: "1:315464666658:web:57bc56340dbe7c6da1447b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
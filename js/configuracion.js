const firebaseConfig = {
    apiKey: "AIzaSyCzUoSfh9YL7TcJyQvKkSul3256DMKoz6s",
    authDomain: "app-ahorcado-js.firebaseapp.com",
    projectId: "app-ahorcado-js",
    storageBucket: "app-ahorcado-js.appspot.com",
    messagingSenderId: "483339847363",
    appId: "1:483339847363:web:d15e5e2691795782798476"
};
// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
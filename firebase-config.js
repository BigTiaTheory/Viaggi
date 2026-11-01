<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWi29tNOobPT7pUtIclrDS1xPRmqcVgIY",
    authDomain: "viaggi-4c1b5.firebaseapp.com",
    projectId: "viaggi-4c1b5",
    storageBucket: "viaggi-4c1b5.firebasestorage.app",
    messagingSenderId: "347181787035",
    appId: "1:347181787035:web:7d65c85390909535a6233e",
    measurementId: "G-5EGGPM6CZC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

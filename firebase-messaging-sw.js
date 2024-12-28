// Import Firebase libraries
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCo0obkVo_IdbCHTp5HseRD8zNStBXCjA0",
  authDomain: "designstret.firebaseapp.com",
  databaseURL: "https://designstret-default-rtdb.firebaseio.com",
  projectId: "designstret",
  storageBucket: "designstret.firebasestorage.app",
  messagingSenderId: "945213540459",
  appId: "1:945213540459:web:80f6a7e0ca9dad2ec0092e",
  measurementId: "G-5FKWK5V67N"
});

// Get Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

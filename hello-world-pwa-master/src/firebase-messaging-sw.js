importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyC6e_Ty_cMg0qe2l_hOCWbEUISjWnWBhYA",
	authDomain: "wpademo-f4140.firebaseapp.com",
	databaseURL: "https://wpademo-f4140.firebaseio.com",
	projectId: "wpademo-f4140",
	storageBucket: "wpademo-f4140.appspot.com",
	messagingSenderId: "444410012819",
	appId: "1:444410012819:web:a553fc681f906966a69966",
	measurementId: "G-T4N1WK9B0J"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});
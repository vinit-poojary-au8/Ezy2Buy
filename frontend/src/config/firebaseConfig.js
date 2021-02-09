import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
	apiKey: 'AIzaSyBGojuwtS7PlNMhlyxL8lbGOR3pJA8HGVk',
	authDomain: 'ezy2buy-f0362.firebaseapp.com',
	projectId: 'ezy2buy-f0362',
	storageBucket: 'ezy2buy-f0362.appspot.com',
	messagingSenderId: '380285380031',
	appId: '1:380285380031:web:f6208a16be45f76f13ad0a',
	measurementId: 'G-9TFLV41EZP',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const storage = firebase.storage()

export { firebase, storage as default }

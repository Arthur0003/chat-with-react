import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import Context from './context/Context';

// Initialize Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCGiX4obCGthu0EpZ7xUFR7ZACBzZlXR4o',
    authDomain: 'react-chat-512b8.firebaseapp.com',
    projectId: 'react-chat-512b8',
    storageBucket: 'react-chat-512b8.appspot.com',
    messagingSenderId: '780481166780',
    appId: '1:780481166780:web:8f2338b916c6e2cb653fb9',
    measurementId: 'G-7E9VE95J0Z'
});

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        firestore,
        auth
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

reportWebVitals();

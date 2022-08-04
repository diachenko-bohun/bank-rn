// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBILg5ax7hJPMFV3OE-2d5thpVDCHBmHjM',
	authDomain: 'tinkoff-copy-a15b4.firebaseapp.com',
	projectId: 'tinkoff-copy-a15b4',
	storageBucket: 'tinkoff-copy-a15b4.appspot.com',
	messagingSenderId: '89076872045',
	appId: '1:89076872045:web:1c2e9c7759a580ac07e064',
	measurementId: 'G-CL28GF5WTS',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();

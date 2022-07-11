import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import {getFirestore} from 'firebase/firestore/lite'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBy0y-l-8_M73SoMK1M5u6KPlzB35UkHIY',
  authDomain: 'react-portfolio-dashboar-df12f.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-df12f',
  storageBucket: 'react-portfolio-dashboar-df12f.appspot.com',
  messagingSenderId: '101970821747',
  appId: '1:101970821747:web:4353ab735f71b0560c6006',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const db = getFirestore(app) 
//db servirà per aggiungere docs nel portfolio collection già creato su firebase da browser
export const storage = getStorage(app)



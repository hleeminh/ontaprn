import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOpoMe55NCiT8m1pW3hOEMOH6rkwgV4Dw",
  authDomain: "tiktok-f5f88.firebaseapp.com",
  databaseURL: "https://tiktok-f5f88-default-rtdb.firebaseio.com",
  projectId: "tiktok-f5f88",
  storageBucket: "tiktok-f5f88.appspot.com",
  messagingSenderId: "1049712161306",
  appId: "1:1049712161306:web:a1d5f08a3afc5a685e57a3",
  measurementId: "G-4HCH18XE9X"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;    
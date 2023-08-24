import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDVOkKHndrtDW6HotmE9_Tvw-jd7vEESvY",
  authDomain: "fileupload-cfa06.firebaseapp.com",
  projectId: "fileupload-cfa06",
  storageBucket: "fileupload-cfa06.appspot.com",
  messagingSenderId: "1018524531585",
  appId: "1:1018524531585:web:f53a3f0eb5396023f90680",
});

// Firebase storage reference
const storage = getStorage(app);

export default storage;

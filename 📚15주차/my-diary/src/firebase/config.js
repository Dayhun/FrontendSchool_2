// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 데이터베이스
import { getFirestore, Timestamp } from "firebase/firestore";
// 인증 관련 초기화
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCDrHKxTiA17M4O_piC23lGp0Q8CWyIQY",
    authDomain: "my-diary-80853.firebaseapp.com",
    projectId: "my-diary-80853",
    storageBucket: "my-diary-80853.appspot.com",
    messagingSenderId: "1076716393155",
    appId: "1:1076716393155:web:2567a7f91a0f5d33c14876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//파이어스토어 초기화
const appFireStore = getFirestore(app);
//인증 초기화
const appAuth = getAuth();

//타임스탬프
const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp };
// Import the functions you need from the SDKs you need
import { initializeApp , firebase} from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhIBOCPTvrSm8_clPZTzzmc9ajW98ifbs",
  authDomain: "otpvalidation-d9660.firebaseapp.com",
  projectId: "otpvalidation-d9660",
  storageBucket: "otpvalidation-d9660.appspot.com",
  messagingSenderId: "630382103052",
  appId: "1:630382103052:web:43c750d985c3bc0570bc29"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp


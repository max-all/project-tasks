// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUpJe-VwQdRlDPaGI6ip0u6LZ4qCE-6LA",
  authDomain: "project-tasks-9c324.firebaseapp.com",
  projectId: "project-tasks-9c324",
  storageBucket: "project-tasks-9c324.firebasestorage.app",
  messagingSenderId: "698873929273",
  appId: "1:698873929273:web:45b7da298c32a805a8f7e8",
  measurementId: "G-R5QBES1GRC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const db = getFirestore(firebaseApp);

export { db };

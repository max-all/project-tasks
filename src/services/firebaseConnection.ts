import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUpJe-VwQdRlDPaGI6ip0u6LZ4qCE-6LA",
  authDomain: "project-tasks-9c324.firebaseapp.com",
  projectId: "project-tasks-9c324",
  storageBucket: "project-tasks-9c324.firebasestorage.app",
  messagingSenderId: "698873929273",
  appId: "1:698873929273:web:45b7da298c32a805a8f7e8",
  measurementId: "G-R5QBES1GRC",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };

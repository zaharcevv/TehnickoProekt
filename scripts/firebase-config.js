import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC2OBGm1TuLml9s6REUEcjua7VTvvxq-E",
    authDomain: "tehnickoproekt.firebaseapp.com",
    projectId: "tehnickoproekt",
    storageBucket: "tehnickoproekt.firebasestorage.app",
    messagingSenderId: "331666400082",
    appId: "1:331666400082:web:4db2c36fcbbf4d4050108b",
    measurementId: "G-TH0JDLLT7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Function to add data to Firestore
export async function addObjectToFirestore(data) {
    try {
        const collectionRef = collection(db, "yourCollectionName"); 
        const docRef = await addDoc(collectionRef, {
            ...data,
            createdAt: new Date() 
        });
        console.log("Document added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
}

// Function to fetch data from Firestore
export async function fetchDataFromFirestore() {
    try {
        const collectionRef = collection(db, "yourCollectionName");
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

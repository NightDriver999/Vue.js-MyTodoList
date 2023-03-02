import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwRRP9DO9VGowwj8Cj6WEnjLffz9SL3lc",
  authDomain: "mytodolist-665e6.firebaseapp.com",
  projectId: "mytodolist-665e6",
  storageBucket: "mytodolist-665e6.appspot.com",
  messagingSenderId: "309233366788",
  appId: "1:309233366788:web:f1cf295175aa7ae5144251"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
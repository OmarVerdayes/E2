import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDXplK4mVxOeMMVjR_vCZkN5zUP6OscoCc",
  authDomain: "chat-react-b5822.firebaseapp.com",
  projectId: "chat-react-b5822",
  storageBucket: "chat-react-b5822.appspot.com",
  messagingSenderId: "49965195654",
  appId: "1:49965195654:web:02bc11d8c151f3fdac0c07"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app)
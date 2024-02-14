import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaUTKe3cxpir4wGvR2KXjQ-W7rtbhkIzc",
  authDomain: "tutorial-1f77a.firebaseapp.com",
  projectId: "tutorial-1f77a",
  storageBucket: "tutorial-1f77a.appspot.com",
  messagingSenderId: "838066693224",
  appId: "1:838066693224:web:192fa5a4efd9343f8947dd",
  dataBaseUrl: "https://tutorial-1f77a-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

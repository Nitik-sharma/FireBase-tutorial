import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCaUTKe3cxpir4wGvR2KXjQ-W7rtbhkIzc",
  authDomain: "tutorial-1f77a.firebaseapp.com",
  databaseURL: "https://tutorial-1f77a-default-rtdb.firebaseio.com",
  projectId: "tutorial-1f77a",
  storageBucket: "tutorial-1f77a.appspot.com",
  messagingSenderId: "838066693224",
  appId: "1:838066693224:web:fa18340242c1b2258947dd",
  data: "https://tutorial-1f77a-default-rtdb.firebaseio.com",
};
const fireBaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(fireBaseApp);
const database = getDatabase(fireBaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const sigInWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const putData = (key, data) => set(ref(database, key), data);
  return (
    <FirebaseContext.Provider value={{ sigInWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

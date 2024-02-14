import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from "./Page/SignIn";
import Sign from "./Sign";
import { app } from "./Firebase/FireStore";
import { useEffect, useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hello", user);
        setUser(user);
      } else {
        console.log("Your are logged out");
        setUser(null);
      }
    });
  });

  return (
    <div className="App">
      <h1>Firebase</h1>
      {user === null ? (
        <div>
          <Sign />
          <SignIn />
        </div>
      ) : (
        <div>
          <h1>hello:{user}</h1>
        </div>
      )}
    </div>
  );
}

export default App;

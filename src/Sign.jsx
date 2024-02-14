import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../src/Firebase/FireStore";

const auth = getAuth(app);
const gitProvider = new GithubAuthProvider();
function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpPage = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("sucess")
    );
  };
  const SignUpWithGitHub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <h1>Sign Up Page</h1>
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="email "
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <br></br>
        <button onClick={SignUpWithGitHub}>SignIn with Git</button>
        <button onClick={signUpPage}>SignUp</button>
      </div>
    </div>
  );
}

export default Sign;

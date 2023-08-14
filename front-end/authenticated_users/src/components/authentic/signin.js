import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import Header from "../features/Header";
import Login from "./login";



const AUTH_STORAGE_KEY = "myAppAuthToken";

function SignIn() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(true);
  

  useEffect(() => {
    const storedToken = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedToken) {
      setUser(storedToken);
    }
  }, []);

  const handleSwitch = () => {
    setLogin(!login);
  };

  const handleLogin = async (event) => {
    event.preventDefault();


    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const token = data.user.email;
        window.localStorage.setItem(AUTH_STORAGE_KEY, token);
        setUser(token);

      })
      .catch((err) => {
        alert("Invalid email or password. Please try again.");

      });
  };

  const handleSignup = async (event) => {
    event.preventDefault();


    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const token = data.user.email;
        window.localStorage.setItem(AUTH_STORAGE_KEY, token);
        setUser(token);
   
      })
      .catch((err) => {
        alert("User in use. Please use another email or login.");

      });
  };

  const handleSignout = async () => {
    signOut(auth).then(() => {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      setLogin(true);
      setUser(null);
    });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const token = result.user.email;
      window.localStorage.setItem(AUTH_STORAGE_KEY, token);
      setUser(token);
   
    } catch (error) {
      console.error("Google sign-in error:", error);
  
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <Header email={user} logout={handleSignout} />
        </div>
      ) : (
        <div>
          
          <Login
            submitted={login ? handleLogin : handleSignup}
            title={login ? "Login" : "Sign Up"}
            forgot={login ? "Forgot password?" : ""}
            submit={login ? "Login" : "Sign Up"}
            lab_not_member={login ? "Not a member?" : "Have an account?"}
            not_member={login ? "Sign Up" : "Login"}
            switch={handleSwitch}
            handleGoogleSignIn = {handleGoogleSignIn}
          />
          
        </div>
      )}
    </div>
  );
}

export default SignIn;

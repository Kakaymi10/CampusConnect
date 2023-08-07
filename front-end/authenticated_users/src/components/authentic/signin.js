import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../features/Header";
import Login from "./login";

const AUTH_STORAGE_KEY = "myAppAuthToken"; // Define the key for authentication token in localStorage

function SignIn() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    // Check for authentication token in localStorage on component mount
    const storedToken = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedToken) {
      setUser(storedToken); // Set the user state to the token if it exists
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
        console.log(data);
        const token = data.user.email; // In this example, we use the email as the token, but you can use the actual token from Firebase
        window.localStorage.setItem(AUTH_STORAGE_KEY, token); // Store the token in localStorage
        setUser(token); // Set the user state to the token
      })
      .catch((err) => {
        alert('Invalid email or password. Please try again.');
      });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data, "authData");
        const token = data.user.email; // In this example, we use the email as the token, but you can use the actual token from Firebase
        window.localStorage.setItem(AUTH_STORAGE_KEY, token); // Store the token in localStorage
        setUser(token); // Set the user state to the token
      })
      .catch((err) => {
        alert('User in use. Please use another email or login');
      });
  };

  const handleSignout = async () => {
    signOut(auth).then(() => {
      window.localStorage.removeItem(AUTH_STORAGE_KEY); // Clear the token from localStorage on logout
      setLogin(true);
      setUser(null);
    });
  };

  return (
    <div>
      {user ? (
        <div>
          <Header email={user} logout={handleSignout} />
        </div>
      ) : (
        <Login
          submitted={login ? handleLogin : handleSignup}
          title={login ? 'Login' : 'Sign Up'}
          forgot={login ? 'Forgot password?' : ''}
          submit={login ? 'Login' : 'Sign Up'}
          lab_not_member={login ? 'Not a member?' : 'Have an account?'}
          not_member={login ? 'Sign Up' : 'Login'}
          switch={handleSwitch}
        />
      )}
    </div>
  );
}

export default SignIn;

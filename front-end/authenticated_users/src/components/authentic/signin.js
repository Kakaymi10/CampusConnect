import React, { useEffect, useState } from "react";
import { useFirebase } from "./config";
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import Routerauth from "./authRoutes";
import Header from "../features/Header";
import Login from "./login";

function SignIn() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(true)
  const { auth } = useFirebase();
  const handleSwitch = () =>{
    setLogin(!login)
  }


  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    signInWithEmailAndPassword(auth, email, password).then(data => {
      console.log(data)
      setUser(data.user.email)
      console.log(user)
    }).catch(err =>{
      alert('Invalid email or password. Please try again.');
    })
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    createUserWithEmailAndPassword(auth, email, password).then(data => {
      console.log(data, "authData")
      setUser(data.user.email)
    }).catch(err =>{
      alert('User in use. Please use another email or login');
    })
  }
  const handleSignout = async () => {
    
    signOut(auth).then(data => {
      console.log(data, "authData")
      setLogin(true)
      setUser(null)
    })
  }
   
      // If the login fails, handle the error and display an alert
    
    
  /*const handleSubmit = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(auth, email, password).then(data =>{
      console.log(data, "authData")
      setUser(data.user.email)
      console.log(data.user.email)
    })
  }
  <h1>Sign In</h1>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="email" placeholder="Email" /><br/>
                <input name="password" placeholder="Password" type="password" /><br></br>
                <button>SignIn</button>  
              </form>*/
  
    return(
        <div>
          {user ? (
            <div>
              <Header
                email={user}
                logout={handleSignout}
                
                />

            </div>
            ) : (
              <Login 
                submitted= {login ? handleLogin : handleSignup}
                title={login ? 'Login' : 'Sign Up'}
                forgot={login ? 'Forgot password?' : ''}
                submit={login ? 'Login' : 'Sign Up'}
                lab_not_member={login ? 'Not a memeber?' : 'Have an account?'}
                not_member={login ? 'Sign Up' : 'Login'}
                switch = {handleSwitch}
                
              />
          )
          }
        </div>
        
    )
    /*const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            setUser(data.user);
        });
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            window.location.href = "https://home-page-sand-six.vercel.app/";
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const isEmailValid = (email) => {
        // Basic email validation using regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleEmailPasswordSignUp = async () => {
        if (!isEmailValid(email)) {
            setErrorMessage('Invalid email address');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered with email and password:', userCredential.user);
        } catch (error) {
            console.error('Error registering user with email and password:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <Header
                        email={user.email}
                        logout={handleSignOut}
                    />

                </div>
            ) : (
                <div className="big_sign_block">
                <h1 className="signin_title">Effortlessly Access: Seamlessly Connect as an Existing User or New Member</h1>
                <div className="signin_block">
                    <div >
                        <input className="input_sect" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        <div className="error-message">{errorMessage}</div>
                    </div>

                    <div>
                        <input className="input_sect" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button className="signUp_button" onClick={handleEmailPasswordSignUp}>
                        Sign in
                    </button>
                    <button className="singIn_google" onClick={handleSignIn}>
                    <div className="google_icon">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            viewBox="0 0 48 48"
                            className="abcRioButtonSvg"
                        >
                            <g>
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                <path fill="none" d="M0 0h48v48H0z" />
                            </g>
                        </svg>
                    </div>
                    <div className="signin_text">
                        <p className="sig_text">Sign In with Google</p>
                    </div>
                    </button>
                </div>
                </div>
            )}
        </div>
    );*/
}

export default SignIn

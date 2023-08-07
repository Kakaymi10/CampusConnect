import './App.css';

import React from 'react';
import { FirebaseProvider } from './components/authentic/config';
//import Routerauth from './components/authentic/authRoutes';
//import axios from 'axios';
//import Header from './components/features/Header';
//import TestComponent from './components/features/test';

import SignIn from './components/authentic/signin';

function App() {
  
  return (
   <FirebaseProvider>
      <SignIn />
   </FirebaseProvider> 
   
 
  

    


   
  

  );
}

export default App;

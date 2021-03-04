import React, { useState, useEffect } from 'react'
import {auth, db} from './services/firebase'
import{useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Chat from './components/Chat'

import './App.css';

function App() {

  const [user] = useAuthState(auth());

  return (
    <section>

      <div className="App">
        <header className="">Welcome to SaltyChat</header>
        <SignOut/>
      </div>

      {user ? <Chat/> : <SignIn/>}

    </section>

  );
}

export default App;

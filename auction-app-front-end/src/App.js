import Auctions from './components/Auctions.js'
import Auction from './components/Auction.js'
import SignUp from './components/SignUp.js'
import SignOut from './components/SignOut.js'
import SignIn from './components/SignIn.js'
import LandingPage from './components/LandingPage.js'
import NavBar from './components/NavBar.js';
import reportWebVitals from './reportWebVitals';
import { Routes, Route} from 'react-router-dom'
import JoinAuction from './components/JoinAuction.js'
import ShowAuction from './components/ShowAuction.js'
import React, { useState,} from 'react';

function App() {
  const [currUser, setCurrUser]=useState(null);

  return (
    <div>
      <NavBar currUser={currUser} setCurrUser={setCurrUser}/>
      <Routes>
        <Route path="/" element={<LandingPage currUser={currUser}/>} />
        <Route path="/auctions" element={<Auctions currUser={currUser}/>} />
        <Route path="/add-an-auction" element={<Auction currUser={currUser} />} />
        <Route path="/join-an-auction" element={< JoinAuction currUser={currUser} />} />
        <Route path="/auctions" element={<Auction currUser={currUser} />} />
        <Route path="/sign-up" element={<SignUp currUser={currUser} setCurrUser={setCurrUser}/>} />
        <Route path="/sign-in" element={<SignIn currUser={currUser} setCurrUser={setCurrUser} />} />
        <Route path="/sign-out" element={<SignOut currUser={currUser} setCurrUser={setCurrUser}/>} />
        <Route path="/show-auction" element={<ShowAuction currUser={currUser} />} />
      </Routes>
    </div>

  );
}

export default App;

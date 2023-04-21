import '../css/SignUp.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn(props) {

  const API_URL = "http://localhost:3000/login"

  const [name, setName] = useState('');
  const [bidder, setBidder] = useState(false);
  const [auctioneer, setAuctioneer] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleBidder = () => {
    setBidder(!bidder);
    setSubmitted(false);
  };

  const handleAuctioneer = () => {
    setAuctioneer(!auctioneer);
    setSubmitted(false);
  };

  const handleSetUser = (userInfo) => {
    props.setCurrUser(userInfo)

  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let bidder_attributes = {}
    let auctioneer_attributes = {}

    if (bidder) {
      bidder_attributes["name"] = name
      bidder_attributes["bid"] = 0
    }

    if (auctioneer){
      auctioneer_attributes["name"] = name
    }

    if (email === '' || password === '') {
      setError(true);
    } else {
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          user: {
            email: email,
            password: password,
            bidder_attributes,
            auctioneer_attributes
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resp) => {
        localStorage.setItem("token", resp.headers.get("Authorization"))
        let authToken = localStorage.getItem("token")
        handleSetUser({ token: authToken, email: email, bidder: bidder_attributes["name"], auctioneer: auctioneer_attributes["name"]});
        setSubmitted(true);
        setError(false);
        navigate("/auctions");
      }, (error) => {
        setError(true);
      })
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };



  return (
    <form id={'sign_in_form'} style={{border: '1px solid #ccc'}}>
      <div className="container">
        <h1>Sign In</h1>
        <p>Please fill in this form to log in.</p>
        <hr />
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={handleEmail} required />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={handlePassword} required />
        <label>
          <input type="checkbox" name="bidder" value={bidder} onChange={handleBidder} style={{marginBottom: '15px'}} /> Bidder
        </label>
        <label>
          <input type="checkbox" name="auctioneer" value={auctioneer} onChange={handleAuctioneer} style={{marginBottom: '15px'}} /> Auctioneer
        </label>
        <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
        <div className="clearfix">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="signinbtn" onClick={handleSubmit}>Sign In</button>
        </div>
      </div>
    </form>

  );
}

export default SignIn;

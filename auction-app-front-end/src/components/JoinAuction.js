import '../css/JoinAuction.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import AuctionInfo from './AuctionInfo.js'
import axios from "axios";

function JoinAuction(props) {
  const [auction, setAuction] = useState([]);
  const API_URL = "http://localhost:3000/auctions"
  const location = useLocation()
  const navigate = useNavigate();

  useEffect (() => {
    axios.get(API_URL + "/"+location.state.auction.id)
    .then(resp => {
      setAuction(resp.data)
    })
  }, [1])

  const handleSubmit = (e) => {
    e.preventDefault();
      axios({
        method: 'PATCH',
        url: API_URL + "/" + location.state.auction.id,
        data: {
          user: {
            email: props.currUser.email,
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resp) => {
        navigate("/show-auction")
      })
  };

  return (
    <div class="column">
      <div class="card">
        <h3>{auction.description}</h3>
          <p>Asking Price: {auction.ask}</p>
          <p>Schedule Date: {auction.created_at}</p>
          <form id={'auction_form'}>
          <input type="submit" onClick={handleSubmit} defaultValue="Join" />
          </form>
      </div>
    </div>
  );
}

export default JoinAuction;

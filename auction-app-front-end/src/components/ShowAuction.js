import '../css/Auction.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuctionInfo from './AuctionInfo.js'
import axios from "axios";

function ShowAuction(props) {
  const API_URL = "http://localhost:3000/user_auctions"
  const [auction, setAuction] = useState([]);

  
  // const [description, setDescription] = useState('');
  const [current, setCurrent] = useState('');
  // const [ask, setAsk] = useState('');
  // const [additionalAmountOne, setAdditionalAmountOne] = useState('');
  // const [additionalAmountTwo, setAdditionalAmountTwo] = useState('');
  // const navigate = useNavigate();

  const handleCurrent = (e) => {
    setCurrent(e.target.value);
  }

  useEffect (() => {
    axios({
      method: 'GET',
      url: API_URL,
      params: {
        email: props.currUser.email
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then((resp) => {
      setAuction(resp.data)
    })
  }, [1])

  const handleSubmit = (e) => {
    e.preventDefault();
      axios({
        method: 'PATCH',
        url: "http://localhost:3000/auctions/" + auction.id,
        data: {
          auction: {
            current: current
          },
          user: {
            email: props.currUser.email,
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resp) => {
        setAuction(resp.data)
      })
  };


  return (

    <div>
      <AuctionInfo  ask={auction.ask} current={auction.current} additionalAmountOne={auction.additional_amount_one} additionalAmountTwo={auction.additional_amount_two} />
      <div>
        <form id={'auction_form'}>
          <label htmlFor="bid">Bid</label>
            <input type="text" id="bid" name="bid" value={current} onChange={handleCurrent} placeholder="Place your bid....." />
            <input type="submit" onClick={handleSubmit} defaultValue="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ShowAuction;

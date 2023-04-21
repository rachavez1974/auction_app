import '../css/Auction.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuctionInfo from './AuctionInfo.js'
import axios from "axios";

function Auction(props) {
  const API_URL = "http://localhost:3000/auctions"

  const [description, setDescription] = useState('');
  const [current, setCurrent] = useState('');
  const [ask, setAsk] = useState('');
  const [additionalAmountOne, setAdditionalAmountOne] = useState('');
  const [additionalAmountTwo, setAdditionalAmountTwo] = useState('');
  const navigate = useNavigate();

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleAsk = (e) => {
    setAsk(e.target.value);
  };

  const handleAdditionalAmountOne = (e) => {
    setAdditionalAmountOne(e.target.value);
  };

  const handleAdditionalAmountTwo = (e) => {
    setAdditionalAmountTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          user: {
            email: props.currUser.email,
            bidder_attributes: props.currUser.bidder,
            auctioneer_attributes: props.currUser.auctioneer
          },
          auction: {
            description: description,
            current: current,
            ask: ask,
            additional_amount_one: additionalAmountOne,
            additional_amount_two: additionalAmountTwo
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then((resp) => {
        navigate("/show-auction");
      })
  };


  return (

    <div>
      <AuctionInfo  ask={ask} current={current} additionalAmountOne={additionalAmountOne} additionalAmountTwo={additionalAmountTwo} />
      <div>
        <form id={'auction_form'}>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={description} onChange={handleDescription} placeholder="Some car....." />
          <label htmlFor="lname">Ask</label>
          <input type="text" id="ask" name="ask" value={ask} onChange={handleAsk}  placeholder="Your asking price.." />
          <label htmlFor="Additional Amout 1">Additional Amount One</label>
          <input type="text" id="additional_amount_1" name="additional_amount_1" onChange={handleAdditionalAmountOne} placeholder="Your asking price + first amount.." />
          <label htmlFor="Additional Amout 2">Additional Amount Two</label>
          <input type="text" id="additional_amount_2" name="additional_amount_2" onChange={handleAdditionalAmountTwo} placeholder="Your asking price + second amount.." />
          <input type="submit" onClick={handleSubmit} defaultValue="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Auction;

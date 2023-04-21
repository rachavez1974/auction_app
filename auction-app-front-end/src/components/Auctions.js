import '../css/Auctions.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import JoinAuction from './JoinAuction'
import axios from "axios";


function Auctions(props) {
  const [auctions, setAuctions] = useState([]);
  const API_URL = "http://localhost:3000/auctions"

  useEffect (() => {
    axios.get(API_URL)
    .then(resp => {
      setAuctions(resp.data)
    })
  },[auctions.length])

  const list = auctions.map(auction => {
    return (<tr>
              <td>{auction.auctioneer_id}</td>
              <td>{auction.description}</td>
              <td>{auction.ask}</td>
              <td>{auction.created_at}</td>
              <td><Link
                className="navbar-item"
                activeClassName="is-active"
                to={"/join-an-auction"}
                state={{auction: auction}}
                exact
              >
                Join
              </Link></td>
            </tr>)
  })

  return (
    <table>
      <tr>
        <th>Seller</th>
        <th>Description</th>
        <th>Asking</th>
        <th>Start Date</th>
        <th>Join</th>
      </tr>
      {list}
    </table>
  );
}

export default Auctions;

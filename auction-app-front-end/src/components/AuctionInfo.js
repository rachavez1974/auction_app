import '../css/Auction.css';
import React, { useState, useEffect } from 'react';

function AuctionInfo(props) {
  // const [current, ask, additionalAmountOne, additionalAmountTwo] = useState(props.current, props.ask, props.additionalAmountOne, props.additionalAmountTwo);

  return (

    <div>
    <h2>Sell It All</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Ask</th>
            <th>Current</th>
            <th>Current + {props.additionalAmountOne}</th>
            <th>Current + {props.additionalAmountTwo}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.ask}</td>
            <td>{props.current}</td>
            <td>{parseInt(props.current) + parseInt(props.additionalAmountOne)}</td>
            <td>{parseInt(props.current) + parseInt(props.additionalAmountTwo)}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default AuctionInfo;

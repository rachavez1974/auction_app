import '../css/NavBar.css';
import { Link } from "react-router-dom";

function LandingPage(props) {

  let signedUp;
  if (!props.currUser){
    signedUp = <Link to="/sign-up">Sign Up</Link>
  }

  return (
    <div className="w3-row-padding w3-padding-64 w3-theme-l1" id="work">
        <div className="w3-quarter">
          <h2>Our Work</h2>
          <p>Our experience lies in commercial and residential real estate, business liquidations, and personal collections. Taylor Auction & Realty provides its clients a variety of services including LIVE, ONLINE, WEBCAST AUCTIONS, FORECLOSURES, BUSINESS INVENTORIES and OPERATIONS, AGRICULTURAL OPERATIONS and PERSONAL PROPERTY APPRAISALS. Our firm thrives on detail management, making sure that each aspect of the auction is conducted appropriately to ensure a successful event. We specialize in every facet of auction and traditional marketing programs, from design to public relations to showing staff.</p>
        </div>
        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img src="/horses.jpeg" alt="Snow" style={{width: '100%'}} />
            <div className="w3-container">
              <h3>Customer 1</h3>
              <h4>Trade</h4>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img src="/house.jpeg" alt="Lights" style={{width: '100%'}} />
            <div className="w3-container">
              <h3>Customer 2</h3>
              <h4>Trade</h4>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img src="/art.jpeg" alt="Mountains" style={{width: '100%'}} />
            <div className="w3-container">
              <h3>Customer 3</h3>
              <h4>Trade</h4>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
            </div>
          </div>
        </div>
        { signedUp }
      </div>
  );
}

export default LandingPage;

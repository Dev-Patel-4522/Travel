import React from 'react';
import './SpecialOff.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PICS from './SpecialOff.js';

import './TRAVEL.css';
// import TravelImages from './IMGDATA.js';
import FRANCE from "./Images/FRANCE.jpg";
// import GREECE from "./Images/GREECE.jpg";
// import SPAIN from "./Images/SPAIN.jpg";
// import ITALY from "./Images/ITALY.jpg";
// import INDIA from "./Images/INDIA.jpg";
import BACKGROUND from './Images/BACKGROUND.jpg';

function TRAVEL(value){
    return (
      <>
        <section>
          <div className="container">
            <img src={BACKGROUND} alt="" />
          </div>
          <div className="txt">
            <h1>Amazing Santorini 7 Days Tour </h1>
            <p className="Para">
              A Morden & Beautifull Place For Travel & Stay
            </p>
            <button className="button-85">Book Now</button>
          </div>
        </section>
        <div>
          {/* <Router>
            <Routes>
                <Route path="/" element="">
                  <h3>345</h3>
                  <p>Tours</p>
                </Route>
                <Route path="/" element="">
                  <h3>468</h3>
                  <p>Holidays</p>
                </Route>
                <Route path="/" element="">
                  <h3>634</h3>
                  <p>Hotels</p>
                </Route>
                <Route path="/" element="">
                  <h3>321</h3>
                  <p>Flights</p>
                </Route>
              </Routes>
          </Router> */}
        </div>
        <section>
          <div className="container2">
            <i class="fa-solid fa-plane"></i>
            <p className="txt2">Special Offers</p>
            <img src={FRANCE} alt='' className='IMG'/>
          </div>
          {/* <div>
            {
              image.map((value)=>)
            }
          </div> */}
        </section>
      </>
    );
}

export default TRAVEL;
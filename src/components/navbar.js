import React from 'react';
import ProfileImg from '../styles/images/27913060_1565772086832529_5472688748384296146_o.jpg'
import { BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav id="side-nav">
        <div className="profile-area">
          <img className="profile-img" src={ProfileImg} />
          <h3>Cole Gonzales</h3>
        </div>

        <ul className="navbar">
              <li>
                  <a href="/Home">Home</a>
              </li>

              <li>
                  <a href="/Projects">Projects</a>
              </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

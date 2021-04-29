import React from 'react';
import { FaHome, FaCode, FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import profileImg from '../styles/images/27913060_1565772086832529_5472688748384296146_o.jpg'

function Navbar() {
  return (
    <div className="Navbar">
      <nav id="top-nav">
        <ul className="navbar">
          <li>
            <a href="/Home">
              <FaHome />
              <span className="menu-item">Home</span>
            </a>
          </li>

          <li>
            <a href="/Projects">
              <FaCode />
              <span className="menu-item">Projects</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* <nav id="side-nav">
        <div className="profile-area">
          <a href="https://www.linkedin.com/in/cole-gonzales-787975191/" rel="noreferrer" target="_blank">
            <img className="profile-img" src={profileImg} alt="Img of Me" />
          </a>
          <h3>Cole Gonzales</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/cole-gonzales-787975191/" rel="noreferrer" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/gcolegonzales?tab=repositories" rel="noreferrer" target="_blank"><FaGithubSquare /></a>
            <a href="https://twitter.com/gcolegonzales01" rel="noreferrer" target="_blank"><AiFillTwitterSquare /></a>
            <a href="https://www.facebook.com/cole.gonzales.5" rel="noreferrer" target="_blank"><AiFillFacebook /></a>
          </div>
        </div>

        <ul className="navbar">
          <li>
            <a href="/Home">
              <FaHome />
              <span className="menu-item">Home</span>
            </a>
          </li>

          <li>
            <a href="/Projects">
              <FaCode />
              <span className="menu-item">Projects</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaPowerOff,
} from "react-icons/fa";




function Header() {
  return (
    <div className="header">
      <nav>
        <div className="brand">iBukun</div>
        <div className="navbar-center">
          <div class="dropdown">
            <button class="dropbtn">Cards</button>
            <div class="dropdown-content">
              <a href="#">3DCards</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Catelogue</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div className="socials">
          <FaFacebookSquare className="icons" />
          <FaLinkedin className="icons" />
          <FaGithubSquare className="icons" />
          <FaPowerOff className="icons" />
        </div>

        <ul></ul>
      </nav>
    </div>
  );
}

export default Header
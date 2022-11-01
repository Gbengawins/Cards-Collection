import React from 'react';
import './flipcard.css';
import { } from 'react-icons/';
import {} from "react-icons/";
import {} from "react-icons/";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaPowerOff,
} from "react-icons/fa";


function FlipCard() {
  return (
    <div className="flip-card">
      <div className="card-center">
        <div className="front-face">
          <div className="front-content">
            <p>Michael Lajoba</p>
            <span>Oduduwa Nation</span>
          </div>
        </div>
        <div className="back-face">
          <div className="back-content">
            <h2>Lajoba Designs</h2>
            <span>Contact Me</span>
            <div className="icons2">
              <FaGithubSquare/> <FaLinkedin/> <FaFacebookSquare/> <FaPowerOff/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard
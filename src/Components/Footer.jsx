import React from 'react';
import './Footer.css';
import call22 from "../assets/call22.png";
import mail22 from "../assets/mail22.png";
import location from "../assets/location.png";
import devihome from '../assets/devihome.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section-padding'>
        <h3 className="footer-heading">Attukal Bhagavathy Temple Trust</h3>
        <img className="footer-image" src={devihome}></img>
        <div className='socials'>
            <a href="https://www.facebook.com/attukal.temple/">
              <img src={facebook}></img>
            </a>
            <a href="#">
              <img src={youtube}></img>
            </a>
            <a href="#">
              <img src={instagram}></img>
            </a>
          </div>
        <div className="footer-links">
          <div className='footer-link'>
            <img className = "call-image" src={call22} ></img>
            <span className='call-text'>+91-471- 2463130(Off) 2456456(Temple)
            </span>
          </div>
          <div className='footer-link'>
            <img className = "mail-image" src={mail22}></img>
            <a href='mailto: attukaltemple@gmail.com'>attukaltemple@gmail.com</a>
          </div>
          <div className='footer-link'>
          <img className = "location-image" src={location}></img>
          <span className='location-text'>
            <a href='https://www.google.com/travel/hotels/s/Ydae3qzn5NDjdvJm7'>
              P.B.No. 5805. Manacaud P.O., 
            <br/>Thiruvananthapuram - 695 009,
            <br/> Kerala, South India.</a>
          </span>
          </div>
        </div>

        <hr></hr>

        <div className= "footer-below">
          <p>
            @{new Date().getFullYear()} Attukal Temple Trust.  All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
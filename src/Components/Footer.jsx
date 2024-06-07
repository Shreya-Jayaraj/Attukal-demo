// 

// import React from 'react';
// import './Footer.css';
// import call22 from "../assets/call22.png";
// import mail22 from "../assets/mail22.png";
// import location from "../assets/location.png";
// import devihome from '../assets/devihome.png';
// import facebook from '../assets/facebook.png';
// import youtube from '../assets/youtube.png';
// import instagram from '../assets/instagram.png';

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className='footer-section-padding'>
//         <h3 className="footer-heading">Attukal Bhagavathy Temple Trust</h3>
//         <img className="footer-image" src={devihome}></img>
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.303211151065!2d76.95291087358508!3d8.469867597493467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1afc32caab%3A0xd37061226166ad07!2sAttukal%20Bhagavathy%20Temple!5e0!3m2!1sen!2sin!4v1717429367662!5m2!1sen!2sin" width="400" height="200" style={{ border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//         <div className='socials'>
//             <a href="https://www.facebook.com/attukal.temple/">
//               <img src={facebook} alt='facebook'></img>
//             </a>
//             <a href="https://www.youtube.com/@attukal_temple">
//               <img src={youtube} alt='youtube'></img>
//             </a>
//             <a href="https://www.instagram.com/attukal_temple_offical?igsh=MXVzZWEyZHU5eHV4ag==">
//               <img src={instagram} alt='instagram'></img>
//             </a>
//           </div>
//         <div className="footer-links">
//           <div className='footer-link'>
//             <img className = "call-image" src={call22} ></img>
//             <span className='call-text'>+91-471- 2463130(Off) 2456456(Temple)
//             </span>
//           </div>
//           <div className='footer-link'>
//             <img className = "mail-image" src={mail22}></img>
//             <a href='mailto: attukaltemple@gmail.com'>attukaltemple@gmail.com</a>
//           </div>
//           <div className='footer-link'>
//           <img className = "location-image" src={location}></img>
//           <span className='location-text'>
//             <a href='https://www.google.com/travel/hotels/s/Ydae3qzn5NDjdvJm7'>
//               P.B.No. 5805. Manacaud P.O., 
//             <br/>Thiruvananthapuram - 695 009,
//             <br/> Kerala, South India.</a>
//           </span>
//           </div>
//         </div>

//         <hr></hr>

//         <div className= "footer-below">
//           <p>
//             @{new Date().getFullYear()} Attukal Temple Trust.  All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

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

        <div className='footer-line'>

        <div className="footer-links">
            <div className='socials'>
              <a href="https://www.facebook.com/attukal.temple/">
                <img src={facebook} alt='facebook'></img>
              </a>
              <a href="https://www.youtube.com/@attukal_temple">
                <img src={youtube} alt='youtube'></img>
              </a>
              <a href="https://www.instagram.com/attukal_temple_offical?igsh=MXVzZWEyZHU5eHV4ag==">
                <img src={instagram} alt='instagram'></img>
              </a>
            </div>
            <div className='footer-link'>
              <img className="call-image" src={call22} alt="call"></img>
              <span className='call-text'>+91-471- 2463130(Off) 2456456(Temple)</span>
            </div>
            <div className='footer-link'>
              <img className="mail-image" src={mail22} alt="mail"></img>
              <a href='mailto: attukaltemple@gmail.com'>attukaltemple@gmail.com</a>
            </div>
          </div>

          <div className="devi-content">
            <img className="footer-image" src={devihome} alt="Devi Home" />
          </div>


          
          <div className='loc-footer-link'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.303211151065!2d76.95291087358508!3d8.469867597493467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1afc32caab%3A0xd37061226166ad07!2sAttukal%20Bhagavathy%20Temple!5e0!3m2!1sen!2sin!4v1717429367662!5m2!1sen!2sin" 
            width=" 100% " 
            height="250" 
            style={{ border:"0", padding:"0.5rem" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='loc-content'>
              <img className="location-image" src={location} alt="location"></img>
                <span className='location-text'>
                  <a href='https://www.google.com/travel/hotels/s/Ydae3qzn5NDjdvJm7'>
                    P.B.No. 5805. Manacaud P.O., 
                    Thiruvananthapuram - 695 009,
                    Kerala, South India.
                  </a>
                </span>
            </div>
          </div>
        </div>
          
        

        <hr />

        <div className="footer-below">
          <p>
            @{new Date().getFullYear()} Attukal Temple Trust. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
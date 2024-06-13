import React from 'react';
import './Popup.css';
import devi2 from '../assets/devi2.jpg';

const Popup = ({ isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
          <img src={devi2} alt="Announcement" className="popup-image" />
          <p>We are excited to announce that bookings are now open for the upcoming events at Attukal Bhagavathy Temple. Join us for a memorable experience!</p>
          <h2>Bookings Open!</h2>
          
          <button className="close-popup-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default Popup;
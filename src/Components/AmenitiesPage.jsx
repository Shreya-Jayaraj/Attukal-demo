import React from 'react';
import './AmenitiesPage.css'; // Make sure to create and import a CSS file for styling

import attukalbus from "../assets/amenities/attukalbus.jpg";
import ambaaudi from "../assets/amenities/ambaaudi.jpg";
import cashcounter from "../assets/amenities/cashcounter.jpg";
import deviaudi from "../assets/amenities/deviaudi.jpg";
import hospital from "../assets/amenities/hospital.jpg";
import karthikaaudi from "../assets/amenities/karthikaaudi.jpg";
import nadapandal from "../assets/amenities/nadapandal.jpg";
import parkingarea from "../assets/amenities/parkingarea.jpg";
import thaliket from "../assets/amenities/thaliket.jpg";
import visrama from "../assets/amenities/visrama.jpg";

const images = [
  { original: nadapandal },
  { original: visrama },
  { original: ambaaudi },
  { original: karthikaaudi },
  { original: deviaudi },
  { original: hospital },
  { original: attukalbus },
  { original: parkingarea },
  { original: cashcounter },
];

const AmenitiesPage = () => {
  return (
    <div className="amenities-container">
      <h1>Amenities</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.original} alt={`Amenity ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesPage;

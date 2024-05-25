import React from 'react';
import './OfficeBearers.css';
import { useState } from "react";
import devi2 from '../assets/devi2.jpg';


const OfficeBearers = () => {

    const [officeBearers] = useState([
        { name: 'John Doe', position: 'President', image: devi2, description: 'John Doe is the president.' },
        { name: 'Jane Smith', position: 'Vice President', image: devi2, description: 'Jane Smith is the vice president.' },
        { name: 'Jim Brown', position: 'Secretary', image: devi2, description: 'Jim Brown is the secretary.' },
        { name: 'Jill White', position: 'Treasurer', image: devi2, description: 'Jill White is the treasurer.'},
    ]);


  return (
    <div className="office-bearers-container">
                <h2>Office Bearers</h2>
                <div className="office-bearers-cards2">
                    {officeBearers.map((bearer, i) => (
                        <div key={i} className="office-bearer-card2">
                            <img src={bearer.image} alt={bearer.name} />
                            <div className="office-bearer-details">
                                <h3>{bearer.name}</h3>
                                <p>{bearer.position}</p>
                                <p>{bearer.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default OfficeBearers
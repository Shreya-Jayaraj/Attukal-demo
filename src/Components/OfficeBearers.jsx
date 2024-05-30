import React from 'react';
import './OfficeBearers.css';
import { useState } from "react";
import SVenugopal from '../assets/SVenugopal.png';
import Vsobha from '../assets/Vsobha.png';
import PKkrishnannair from '../assets/PKkrishnannair.png';
import Saratkumar from '../assets/Saratkumar.png';
import ASanumodh from '../assets/ASanumodh.png';
import Geethakumari from '../assets/Geethakumari.png';


const OfficeBearers = () => {

    const [officeBearers] = useState([
        { name: 'Sri S Venugopal', position: 'Chairman', image: SVenugopal  },
        { name: 'Smt V Sobha', position: 'President', image: Vsobha  },
        { name: 'Sri P.K. Krishnan Nair', position: 'Vice President', image: PKkrishnannair  },
        { name: 'Sri Sarat Kumar', position: 'Secretary', image: Saratkumar  },
        { name: 'Sri A.S. Anumodh', position: 'Joint Secretary', image: ASanumodh  },
        { name: 'Smt Geetha Kumari.A', position: 'Treasurer', image: Geethakumari  },
        
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default OfficeBearers
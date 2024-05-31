import { React, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Activities.css';
import magazine from '../assets/activities/magazine.jpg';
import sreekovil from '../assets/activities/sreekovil.jpg';
import traininginst from '../assets/activities/traininginst.jpg'
import arrow2 from '../assets/activities/arrow2.png'


const FlippingCard = ({ frontContent, backContent, isFlipped, flipCard }) => {
  return (
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
      <div className='activity-card' onClick={flipCard}>
        {frontContent}
        <div className='arrow-icon'>
        <img src={arrow2} className='arrow-icon'/>
        </div>
      </div>
      <div className='activity-card card-back' onClick={flipCard}>
        {backContent}
        <div className='arrow-icon'>
        <img src={arrow2} className='arrow-icon'/>
        </div>
      </div>
    </ReactCardFlip>
  );
};

const Activities = () => {
  const [flippedStates, setFlippedStates] = useState([false, false, false]);

  const flipCard = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  const activitycards = [
    {
      frontContent: (
        <div>
          <img src={magazine} alt="Magazine" />
          <h4>AMBA PRASADAM MAGAZINE</h4>
        </div>
      ),
      backContent: (
        <p>
          A religious and spiritual magazine entitled “Amba Prasadam” has been started from October 1999 and it is being widely received by the devotees and the public at large. The cost of the publication is Rs 10/- per copy and annual subscription is Rs 150/- inclusive of postage in India. The subscription may be sent by demand draft drawn in favour of “The Secretary, Attukal Bhagavathy Temple Trust” payable at any bank having branch office in Thiruvananthapuram.
        </p>
      ),
    },

    {
        frontContent: (
          <div>
            <img src={sreekovil} alt="Srikovil" />
            <h4>GOLD COVERING SREEKOVIL</h4>
          </div>
        ),
        backContent: (
          <p>
            Trust proposed to plate the Sreekovil with Gold offered by the devotees for this purpose. Devotees can offer cash or gold for this purpose.
          </p>
        ),
      },

      {
        frontContent: (
          <div>
            <img src={traininginst} alt="traininginst" />
            <h4>INDUSTRIAL TRAINING INSTITUTE</h4>
          </div>
        ),
        backContent: (
          <p>
            The Trust is running one Industrial Training Centre offering courses on Draftman (Civil), Electrician and Architectural Assistant
          </p>
        ),
      },
  ];

  
         
  return (
    <div className='activities-container'>
      <h1>Activities</h1>
      <div className='activities-intro'>
        <p>Ever since the Trust commenced its administration there has been considerable improvement and development in the Temple. The renovation of the Temple, improvement of roads leading to the Temple especially through the bund road from killipalam, development of parking area, construction of Nadapandal, Shops, Toilet Complex, expansion of area of Pongala etc had been undertaken by the Trust. A portion of the gold received as offerings from devotees had been utilized for making “Anki” to adorn the Diety. 
        <br/><br/> Some of the activities are given below:
        
      </p>
      </div>
      <div className='activities-card-grid'>
        {activitycards.map((card, index) => (
          <FlippingCard
            key={index}
            frontContent={card.frontContent}
            backContent={card.backContent}
            isFlipped={flippedStates[index]}
            flipCard={() => flipCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
